import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class productos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  stock: number;
}
