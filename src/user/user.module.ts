import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivationModule } from 'src/activation/activation.module';
import { AuthModule } from 'src/auth/auth.module';
import { BanModule } from 'src/ban/ban.module';
import { MailModule } from 'src/mail/mail.module';
// import { Role } from 'src/role/role.entity';
import { RoleModule } from 'src/role/role.module';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RoleModule,
    ActivationModule,
    BanModule,
    MailModule,
    forwardRef(() => AuthModule)
  ],
  exports: [
    UserService
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
