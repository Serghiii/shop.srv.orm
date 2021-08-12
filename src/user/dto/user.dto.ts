import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class UserDto {
   @MaxLength(50, { message: 'Максимальна довжина 50' })
   @IsString({ message: 'Повинно буди строкою' })
   readonly name: string;
   @MaxLength(13, { message: 'Максимальна довжина 13' })
   @IsString({ message: 'Повинно буди строкою' })
   readonly phone: string;
   @MaxLength(50, { message: 'Максимальна довжина 50' })
   @IsString({ message: 'Повинно буди строкою' })
   @IsEmail({}, { message: 'Не коректний mail' })
   readonly email: string;
   @IsString({ message: 'Повинно буди строкою' })
   @MinLength(6, { message: 'Пароль має бути не менше 6 символів' })
   readonly password: string;
}