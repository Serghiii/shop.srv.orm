import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../user/dto/user.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {

   constructor(private userService: UserService,
      private jwtService: JwtService) { }

   public async login(user: User, rememberme: boolean = false) {
      return this.generateToken(user, rememberme);
   }

   public async validateUser(username: string, password: string) {
      const user = await this.userService.getUserByLogin(username, username);
      if (user) {
         const passwordEquals = await bcrypt.compare(password, user.password);
         if (passwordEquals) {
            if (!user.active) throw new UnauthorizedException({ message: 'Користувач ще не активований' });
            if (user.ban) throw new UnauthorizedException({ message: 'Ваш акаунт заблоковано, зверніться в службу підтримки' });
            return user;
         }
      }
      throw new UnauthorizedException({ message: 'Не коректний логін або пароль' });
   }

   public async validatePayload(payload: any) {
      const user = await this.userService.getUserByLogin(payload.phone, payload.email);
      if (user && user.active && user.id == Number(payload.id) && !user.ban) return user;
      throw new UnauthorizedException({ message: 'Користувач не авторизований' });
   }

   public async register(userDto: UserDto) {
      const hashPassword = await bcrypt.hash(userDto.password, 5);
      const user = await this.userService.createUser({ ...userDto, password: hashPassword }, 'USER');
      if (!user) throw new HttpException('Не вдалося створити користувача', HttpStatus.BAD_REQUEST);
      return { phone: user.phone, email: user.email };
   }

   private async generateToken(user: User, rememberme: boolean = false) {
      const payload = { id: user.id, phone: user.phone, email: user.email, roles: user.roles, profile: user.profile };
      // console.log(payload);
      // console.log(user);
      return {
         token: this.jwtService.sign(payload, {
            expiresIn: rememberme ? process.env.TOKEN_EXPIRATION_RM : process.env.TOKEN_EXPIRATION
         })
      };
   }

}
