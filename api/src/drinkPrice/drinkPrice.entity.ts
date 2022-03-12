import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class drinkPrice {
  @PrimaryColumn({ nullable: false })
  store_id: number;

  @PrimaryColumn({ nullable: false })
  drink_id: number;

  @Column({ type: 'double', default: 0.0 })
  drinkPrice: number;
}
