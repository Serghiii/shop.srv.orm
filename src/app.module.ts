import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { Role } from './role/role.entity';
import { AuthModule } from './auth/auth.module';
import { Activation } from './activation/activation.entityl';
import { ActivationModule } from './activation/activation.module';
import { BanModule } from './ban/ban.module';
import { Ban } from './ban/ban.entity';
import { resolve } from 'path';
import { DeviceModule } from './device/device.module';
import { Device } from './device/device.entity';
import { Category } from './category/category.entity';
import { Brand } from './brand/brand.entity';
import { Type } from './type/type.entity';
import { Prop } from './prop/prop.entity';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { TypeModule } from './type/type.module';
import { BasketModule } from './basket/basket.module';
import { Basket } from './basket/basket.entity';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.${process.env.NODE_ENV}.env`, '.env']
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DB,
      // timezone: 'Europe/Kiev',
      entities: [User, Role, Activation, Ban, Profile, Device, Category, Brand, Type, Prop, Basket],
      synchronize: true,
      // autoLoadEntities: true
    }),
    UserModule,
    RoleModule,
    AuthModule,
    ActivationModule,
    BanModule,
    Profile,
    DeviceModule,
    BrandModule,
    CategoryModule,
    TypeModule,
    BasketModule,
    ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule { }