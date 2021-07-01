import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Exception } from 'handlebars';
import { Activation } from 'src/activation/activation.entityl';
import { ActivationService } from 'src/activation/activation.service';
import { BanService } from 'src/ban/ban.service';
import { BanDto } from 'src/ban/dto/ban.dto';
import { MailService } from 'src/mail/mail.service';
import { RoleService } from 'src/role/role.service';
import { Connection, Repository } from 'typeorm';
import { AddRoleDto } from './dto/add-role.dto';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

   constructor(
      private connection: Connection,
      @InjectRepository(User) private userRepository: Repository<User>,
      private roleService: RoleService,
      private activationService: ActivationService,
      private banService: BanService,
      private mailService: MailService,
   ) { }

   async createUser(dto: UserDto, role: string) {
      try {
         return await this.connection.transaction(async manager => {
            const user = await manager.create(User);
            user.phone = dto.phone;
            user.email = dto.email;
            user.password = dto.password;
            const role_ = await this.roleService.getRole(role);
            if (!role_) throw Exception;
            user.roles = [];
            user.roles.push(role_);
            const res = await manager.save(user);
            const activation = await manager.create(Activation);
            activation.user = res;
            activation.uuid = randomUUID();
            await manager.save(activation);
            await this.mailService.sendMail(user.email, `${process.env.API_URL}/user/activate/${activation.uuid}`)
            return res;
         });
      } catch (e) {
         return null;
      }
   }

   async activateUser(uuid: string) {
      try {
         await this.connection.transaction(async manager => {
            const activation = await this.activationService.getActivation(uuid);
            const user = await this.getUserById(activation.user.id);
            user.active = true;
            await manager.save(user);
            await manager.remove(activation);
         });
      } catch (e) {
         throw new HttpException('Не вдалося активувати користувача', HttpStatus.BAD_REQUEST);
      }
      return '<div><h1>Користувач активований</h1></div>'
   }

   async getAllUsers() {
      return await this.userRepository.find();
   }

   async getUserByLogin(phone: string, email: string) {
      return await this.userRepository.findOne({ where: [{ phone: phone }, { email: email }], relations: ['roles', 'bans'] });
   }

   async getUserById(id: number) {
      return await this.userRepository.findOne(id);
   }

   async addRole(dto: AddRoleDto) {
      const user = await this.userRepository.findOne(dto.userId);
      const role = await this.roleService.getRole(dto.value);
      if (role && user) {
         user.roles = [];
         user.roles.push(role);
         this.userRepository.save(user);
         return dto;
      }
      throw new HttpException('Користувач або роль не знайдені', HttpStatus.NOT_FOUND);
   }

   async ban(dto: BanDto) {
      const user = await this.userRepository.findOne(dto.userId, { relations: ['bans'] });
      if (!user) {
         throw new HttpException('Користувача не знайдено', HttpStatus.NOT_FOUND);
      }
      if (user.bans.length) {
         throw new HttpException('Користувача вже заблоковано', HttpStatus.BAD_REQUEST);
      }
      return await this.banService.createBan(user, dto.reason);
   }

}
