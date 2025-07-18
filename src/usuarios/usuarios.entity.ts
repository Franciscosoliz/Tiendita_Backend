import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'customer' })
  role: string;
}
    