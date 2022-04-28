import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Likes {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({ nullable: false })
  drink_id: number;

  @Column({ nullable: false })
  drinkName: string;

  @Column({ nullable: false, default: 0 })
  like_count: number;
}
