import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICEOSERVICECS_CLIENTS } from './constants';
import { OrderController } from './order/order.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICEOSERVICECS_CLIENTS.USER_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 4003,
        },
      },
      {
        name: MICEOSERVICECS_CLIENTS.PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 4002,
        },
      },
      {
        name: MICEOSERVICECS_CLIENTS.ORDERS_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 4001,
        },
      },
    ]),
  ],
  controllers: [AppController, OrderController],
  providers: [AppService],
})
export class AppModule {}
