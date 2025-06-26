import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICEOSERVICECS_CLIENTS } from 'src/constants';

@Controller('order')
export class OrderController {

    constructor(@Inject(MICEOSERVICECS_CLIENTS.ORDERS_SERVICE) private orderServicesClient:ClientProxy, ){}
    @Post()
    createOrder(@Body() order: any) {
        return this.orderServicesClient.send("create_order", order);
    }
}
