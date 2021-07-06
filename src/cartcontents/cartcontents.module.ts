import { Module } from '@nestjs/common';
import { CartContentsService } from './cartcontents.service';

@Module({
   providers: [CartContentsService]
})
export class CartContentsModule { }
