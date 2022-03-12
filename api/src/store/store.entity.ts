import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  storeName: string;

  @Column({ nullable: false })
  location: string;
}
