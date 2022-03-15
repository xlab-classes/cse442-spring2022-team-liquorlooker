import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class drinkPrice {
  @PrimaryColumn({ nullable: false })
  store_id: number;

  @Column({ nullable: false })
  storeName: string;

  @PrimaryColumn({ nullable: false })
  drink_id: number;

  @Column({ nullable: false })
  drinkName: string;

  @Column({ type: 'double', default: 0.0 })
  drinkPrice: number;
}
