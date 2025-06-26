import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  @MessagePattern('get_order')
  getProduct(id: number) {
    return { id, name: 'laptop', price: 1000 };
  }
}
