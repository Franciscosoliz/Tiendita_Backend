import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagos } from './pagos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PagossService {
  constructor(@InjectRepository(Pagos) private repo: Repository<Pagos>) {}

  create(data: Partial<Pagos>) {
    const Pagos = this.repo.create(data);
    return this.repo.save(Pagos);
  }

  findAll() {
    return this.repo.find();
  }

  findByUser(userId: number) {
    return this.repo.find({ where: { userId } });
  }
}
