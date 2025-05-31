import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { CartService } from './carrito.service';

@Controller('cart')
export class CartController {
  constructor(private readonly service: CartService) {}

  @Get(':userId')
  findAll(@Param('userId') userId: number) {
    return this.service.findAll(userId);
  }

  @Post()
  addItem(@Body() body: { userId: number; productId: number; quantity: number }) {
    return this.service.addItem(body.userId, body.productId, body.quantity);
  }

  @Put(':id')
  updateQuantity(@Param('id') id: number, @Body() body: { quantity: number }) {
    return this.service.updateQuantity(id, body.quantity);
  }

  @Delete(':id')
  removeItem(@Param('id') id: number) {
    return this.service.removeItem(id);
  }

  @Delete('clear/:userId')
  clearCart(@Param('userId') userId: number) {
    return this.service.clearCart(userId);
  }
}
