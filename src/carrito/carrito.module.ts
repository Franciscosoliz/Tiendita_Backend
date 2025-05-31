import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItem } from './carrito.entity';
import { CartService } from './carrito.service';
import { CartController } from './carrito.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CartItem])],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
