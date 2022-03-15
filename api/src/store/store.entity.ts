import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';

@Entity()
export class store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  storeName: string;

  @Column({ type: 'double', nullable: false })
  latitude: number;

  @Column({ type: 'double', nullable: false })
  longitude: number;
}
