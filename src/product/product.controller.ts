import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
   constructor(private readonly productService: ProductService) { }

   @Get('/new/:value')
   async activate(@Param('value') value: number) {
      const res = await this.productService.getDevices(1, value);
      return res;
   }

}
