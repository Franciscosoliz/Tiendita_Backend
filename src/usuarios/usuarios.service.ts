import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuarios) private repo: Repository<Usuarios>) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  create(data: Partial<Usuarios>) {
    const Usuarios = this.repo.create(data);
    return this.repo.save(Usuarios);
  }

  update(id: number, data: Partial<Usuarios>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
