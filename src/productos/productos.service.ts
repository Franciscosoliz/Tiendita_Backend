import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { productos } from './productos.entity';

@Injectable()
export class ProductosService {
  constructor(@InjectRepository(productos) private repo: Repository<productos>) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  create(data: Partial<productos>) {
    const Productos = this.repo.create(data);
    return this.repo.save(Productos);
  }

  update(id: number, data: Partial<productos>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
