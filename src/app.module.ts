import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';
import { ActivationModule } from './activation/activation.module';
import { BanModule } from './ban/ban.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { TypeModule } from './type/type.module';
import { CartModule } from './cart/cart.module';
import { CartContentsModule } from './cartcontents/cartcontents.module';
import { ProfileModule } from './profile/profile.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropModule } from './prop/prop.module';
// import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.${process.env.NODE_ENV}.env`, '.env']
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'static'),
    //   exclude: ['/api*'],
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DB,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      charset: process.env.DB_CHARSET,
      timezone: process.env.DB_TIMEZONE,
      synchronize: process.env.SYNCHRONIZE.toLowerCase() === 'true'
    }),
    UserModule,
    RoleModule,
    AuthModule,
    ActivationModule,
    BanModule,
    ProductModule,
    CategoryModule,
    TypeModule,
    ProfileModule,
    PropModule,
    CartModule,
    CartContentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }