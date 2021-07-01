import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activation } from './activation.entityl';
import { ActivationService } from './activation.service';

@Module({
   imports: [
      TypeOrmModule.forFeature([Activation]),
   ],
   exports: [ActivationService],
   providers: [ActivationService]
})
export class ActivationModule { }
