import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './orders/orders.controller';

@Module({
  imports: [],
  controllers: [AppController,OrderController],
  providers: [AppService],
})
export class AppModule {}
