import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activation } from './activation.entityl';

@Injectable()
export class ActivationService {
   constructor(@InjectRepository(Activation) private activationRepository: Repository<Activation>
   ) { }

   async getActivation(uuid: string) {
      return await this.activationRepository.findOne(uuid, { relations: ['user'] });
   }

}
