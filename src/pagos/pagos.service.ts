import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './pagos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
  constructor(@InjectRepository(Payment) private repo: Repository<Payment>) {}

  create(data: Partial<Payment>) {
    const payment = this.repo.create(data);
    return this.repo.save(payment);
  }

  findAll() {
    return this.repo.find();
  }

  findByUser(userId: number) {
    return this.repo.find({ where: { userId } });
  }
}
