// roles.controller.ts
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Post()
  create(@Body('name') name: string) {
    return this.rolesService.create(name);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.rolesService.deleteById(id);
  }
}
