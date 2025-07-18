import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productos } from './productos.entity';
import { ProductosService } from './productos.service';
import { ProductossController } from './productos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([productos])],
  providers: [ProductosService],
  controllers: [ProductossController],
})
export class ProductossModule {}
