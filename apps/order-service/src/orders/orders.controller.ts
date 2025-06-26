import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrderController {

    @MessagePattern("create_order")
    createOrder(order: any) {
        console.log("order recived on orders micoservices...", order);
        return { message: "Order created", order };
    }
}
