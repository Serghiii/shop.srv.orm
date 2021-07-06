import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
   constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }

   async getDevices(page: number, limit: number): Promise<Product[]> {
      const res = this.productRepository.find({
         order: {
            updatedAt: 'DESC'
         },
         skip: page * limit - limit,
         take: limit
      });
      return res;
   }

}
