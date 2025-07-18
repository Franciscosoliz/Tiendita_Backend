import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Carrito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  productId: number;

  @Column()
  quantity: number;
}
