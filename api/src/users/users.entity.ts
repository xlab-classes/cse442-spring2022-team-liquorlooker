import { Exclude, Expose } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../auth/auth.role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Expose()
  @Column({nullable: false, default: "user"})
  role: string;

  @Exclude()
  @Column({ nullable: false })
  password: string;
}
