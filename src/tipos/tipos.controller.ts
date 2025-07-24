import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { TiposService } from './tipos.service';

@Controller('tipos')
export class TiposController {
  constructor(private readonly tiposService: TiposService) {}

  @Get()
  findAll() {
    return this.tiposService.findAll();
  }

  @Post()
  create(@Body('nombre') nombre: string) {
    return this.tiposService.create(nombre);
  }

  @Put(':_id')
  update(@Param('_id') id: string, @Body('nombre') nombre: string) {
    return this.tiposService.update(id, nombre);
  }

  @Delete(':_id')
  remove(@Param('_id') id: string) {
    return this.tiposService.remove(id);
  }
}

