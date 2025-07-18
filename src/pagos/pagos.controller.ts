import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PagossService } from './pagos.service';

@Controller('pagos')
export class PagossController {
  constructor(private readonly service: PagossService) {}

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: number) {
    return this.service.findByUser(userId);
  }
}
