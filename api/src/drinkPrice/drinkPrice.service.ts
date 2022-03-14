import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drink } from 'src/drinks/drinks.entity';
import { DrinksModule } from 'src/drinks/drinks.module';
import { DrinksService } from 'src/drinks/drinks.service';
import { store } from 'src/store/store.entity';
import { storeService } from 'src/store/store.service';
import { Repository } from 'typeorm';
import { drinkPrice } from './drinkPrice.entity';

@Injectable()
export class drinkPriceService {
  constructor(
    @InjectRepository(drinkPrice)
    private drinkPriceRepository: Repository<drinkPrice>,
    private drinkService: DrinksService,
    private storeService: storeService,
  ) {}

  async getDrinkPricesByName(drinkName: string): Promise<drinkPrice[]> {
    const drinkID = await this.drinkService.getDrinkIdByName(drinkName);
    return await this.drinkPriceRepository.find({
      select: ['store_id', 'drinkPrice'],
      where: [{ drink_id: drinkID.id }],
    });
  }

  async addDrinkPrice(
    storeName: string,
    drinkName: string,
    drinkPrice: number,
  ): Promise<drinkPrice> {
    const storeID = await this.storeService.getStoreIdByName(storeName);
    const drinkID = await this.drinkService.getDrinkIdByName(drinkName);
    const toBeAdded = await this.drinkPriceRepository.create({
      store_id: storeID.id,
      drink_id: drinkID.id,
      drinkPrice: drinkPrice,
    });

    await this.drinkPriceRepository.save(toBeAdded);
    return toBeAdded;
  }
}
