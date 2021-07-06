import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Exception } from 'handlebars';
import { Activation } from '../activation/activation.entity';
import { ActivationService } from '../activation/activation.service';
import { BanService } from '../ban/ban.service';
import { BanDto } from '../ban/dto/ban.dto';
import { MailService } from '../mail/mail.service';
import { RoleService } from '../role/role.service';
import { Connection, Repository } from 'typeorm';
import { AddRoleDto } from './dto/add-role.dto';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { Profile } from 'src/profile/profile.entity';
import * as bcrypt from 'bcryptjs';
import { Cart } from 'src/cart/cart.entity';

@Injectable()
export class UserService {

   constructor(
      @InjectConnection() private connection: Connection,
      @InjectRepository(User) private userRepository: Repository<User>,
      private roleService: RoleService,
      private activationService: ActivationService,
      private banService: BanService,
      private mailService: MailService,
   ) { }

   async createUser(dto: UserDto, role: string): Promise<User> {
      try {
         return await this.connection.transaction(async manager => {
            const user = await manager.create(User);
            user.phone = dto.phone;
            user.email = dto.email;
            user.password = dto.password;
            const role_ = await this.roleService.getRole(role);
            user.roles = [];
            user.roles.push(role_);
            const res = await manager.save(user);
            const profile = await manager.create(Profile);
            profile.name = dto.name;
            profile.user = res;
            await manager.save(profile);
            const cart = await manager.create(Cart);
            cart.user = res;
            await manager.save(cart);
            const activation = await manager.create(Activation);
            activation.user = res;
            activation.uuid = randomUUID();
            await manager.save(activation);
            await this.mailService.sendMail(user.email, `${process.env.API_URL}/user/activate/${activation.uuid}`)
            return res;
         });
      } catch (e) {
         throw new HttpException('Не вдалося створити користувача', HttpStatus.BAD_REQUEST);
      }
   }

   async activateUser(uuid: string): Promise<User> {
      try {
         return await this.connection.transaction(async manager => {
            const activation = await this.activationService.getActivation(uuid);
            const user = await this.getUserById(activation.user.id);
            user.active = true;
            await manager.save(user);
            await manager.remove(activation);
            return user;
         })
      } catch (e) {
         throw new HttpException('Не вдалося активувати користувача', HttpStatus.BAD_REQUEST);
      }
   }

   async updateUserPassword(id: number, password: string): Promise<User> {
      try {
         const user = await this.userRepository.findOne(id);
         user.password = await bcrypt.hash(password, 5);
         await this.userRepository.save(user);
         return user;
      } catch (e) {
         throw new HttpException('Не вдалося змінити пароль', HttpStatus.BAD_REQUEST);
      }
   }

   async getAllUsers() {
      return await this.userRepository.find();
   }

   async getUserByLogin(phone: string, email: string) {
      return await this.userRepository.findOne({ where: [{ phone: phone }, { email: email }], relations: ['roles', 'profile', 'ban'] });
   }

   async getUserById(id: number) {
      return await this.userRepository.findOneOrFail(id);
   }

   async getUserProfileById(id: number) {
      const user = await this.userRepository.findOneOrFail(id, { relations: ['profile'] });
      return { name: user.profile.name, phone: user.phone, email: user.email, gender: user.profile.gender, avatar: user.profile.avatar }
   }

   async addRole(dto: AddRoleDto) {
      try {
         const user = await this.userRepository.findOneOrFail(dto.userId, { relations: ['roles'] });
         const role = await this.roleService.getRole(dto.name);
         if (user.roles.some(role_ => role_ == role)) {
            throw Exception;
         }
         // user.roles = [];
         user.roles.push(role);
         this.userRepository.save(user);
         return dto;
      } catch (e) {
         throw new HttpException('Користувач або роль не знайдені', HttpStatus.NOT_FOUND);
      }
   }

   async ban(dto: BanDto) {
      const user = await this.userRepository.findOne(dto.userId, { relations: ['bans'] });
      if (!user) {
         throw new HttpException('Користувача не знайдено', HttpStatus.NOT_FOUND);
      }
      if (user.ban) {
         throw new HttpException('Користувача вже заблоковано', HttpStatus.BAD_REQUEST);
      }
      return await this.banService.createBan(user, dto.reason);
   }

}
