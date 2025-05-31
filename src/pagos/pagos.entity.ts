import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column('decimal')
  amount: number;

  @Column()
  method: string; // 'card', 'paypal', etc.

  @Column()
  status: string; // 'pending', 'completed', 'failed'

  @CreateDateColumn()
  createdAt: Date;
}
