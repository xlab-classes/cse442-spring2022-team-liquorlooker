import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({ nullable: false })
  drink_id: number;

  @Column({ nullable: false })
  drinkName: string;

  @Column({ nullable: false })
  userName: string;

  @Column({ nullable: false })
  comment: string;
}
