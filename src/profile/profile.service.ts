import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Connection, Repository } from 'typeorm';
import { ProfileDto } from './dto/profile.dto';
import { Profile } from './profile.entity';
import { FileService } from '../file/file.service';


@Injectable()
export class ProfileService {
   constructor(
      @InjectConnection() private connection: Connection,
      @InjectRepository(Profile) private profileRepository: Repository<Profile>,
      private fileService: FileService,
   ) { }

   async updateProfile(id: number, dto: ProfileDto): Promise<Profile> {
      try {
         const profile = await this.profileRepository.findOne(id);
         profile.name = dto.name;
         profile.gender = dto.gender;
         if (dto.avatar) profile.avatar = dto.avatar;
         await this.profileRepository.save(profile);
         return profile;
      } catch (e) {
         throw new HttpException('Не вдалося поновити профіль', HttpStatus.BAD_REQUEST);
      }
   }

   async updateAvatar(id: number, data: string): Promise<Profile> {
      try {
         return await this.connection.transaction(async manager => {
            const profile = await manager.findOne(Profile, id);
            if (!profile.avatar) {
               profile.avatar = await randomUUID() + '.jpg';
            }
            await manager.save(profile);
            await this.fileService.writeImage(profile.avatar, 'static/avatars', data)
            return profile;
         })
      } catch (e) {
         throw new HttpException('Не вдалося поновити профіль', HttpStatus.BAD_REQUEST);
      }
   }
}