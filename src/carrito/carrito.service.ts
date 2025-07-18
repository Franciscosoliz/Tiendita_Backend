import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrito } from './carrito.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(@InjectRepository(Carrito) private repo: Repository<Carrito>) {}

  findAll(userId: number) {
    return this.repo.find({ where: { userId } });
  }

  addItem(userId: number, productId: number, quantity: number) {
    const item = this.repo.create({ userId, productId, quantity });
    return this.repo.save(item);
  }

  updateQuantity(id: number, quantity: number) {
    return this.repo.update(id, { quantity });
  }

  removeItem(id: number) {
    return this.repo.delete(id);
  }

  clearCart(userId: number) {
    return this.repo.delete({ userId });
  }
}
