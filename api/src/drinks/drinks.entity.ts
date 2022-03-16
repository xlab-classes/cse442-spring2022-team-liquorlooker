import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Drink {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  drinkName: string;
}
