import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuarios) private repo: Repository<Usuarios>) { }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  create(data: Partial<Usuarios>) {
    const usuario = this.repo.create(data);
    return this.repo.save(usuario);
  }

  update(id: number, data: Partial<Usuarios>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  async register(usuario: string, password: string): Promise<Usuarios> {
    // Validar que no exista usuario igual
    const existingUser = await this.repo.findOneBy({ usuario });
    if (existingUser) {
      throw new ConflictException('El usuario ya existe');
    }
    const newUser = this.repo.create({ usuario, password, rol: 'user' });
    return this.repo.save(newUser);
  }

  async validateUser(usuario: string, password: string): Promise<Usuarios | null> {
    const user = await this.repo.findOneBy({ usuario });
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async findByUsername(usuario: string) {
    return this.repo.findOne({ where: { usuario } });
  }


}
