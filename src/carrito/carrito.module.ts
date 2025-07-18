import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from './carrito.entity';
import { CartService } from './carrito.service';
import { CartController } from './carrito.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Carrito])],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
