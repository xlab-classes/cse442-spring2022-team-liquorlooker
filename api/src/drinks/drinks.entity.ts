import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Drink {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  drinkName: string;
}
