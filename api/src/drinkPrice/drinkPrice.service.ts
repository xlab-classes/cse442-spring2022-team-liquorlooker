import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drink } from 'src/drinks/drinks.entity';
import { DrinksModule } from 'src/drinks/drinks.module';
import { DrinksService } from 'src/drinks/drinks.service';
import { store } from 'src/store/store.entity';
import { storeService } from 'src/store/store.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
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
    const drinkPrices = await this.drinkPriceRepository.find({
      select: ['storeName', 'drinkName', 'drinkPrice'],
      where: [{ drink_id: drinkID.id }],
    });
    return drinkPrices;
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
      storeName: storeName,
      drink_id: drinkID.id,
      drinkName: drinkName,
      drinkPrice: drinkPrice,
    });

    await this.drinkPriceRepository.save(toBeAdded);
    return toBeAdded;
  }

  async deleteDrinkPrice(
    storeName: string,
    drinkName: string,
  ): Promise<DeleteResult> {
    const storeID = await this.storeService.getStoreIdByName(storeName);
    const drinkID = await this.drinkService.getDrinkIdByName(drinkName);
    return await this.drinkPriceRepository
      .createQueryBuilder()
      .delete()
      .from(drinkPrice)
      .where('store_id = :store_id', { store_id: storeID.id })
      .andWhere('drink_id = :drink_id', { drink_id: drinkID.id })
      .execute();
  }

  async updateDrinkPrice(
    storeName: string,
    drinkName: string,
    newDrinkPrice: number,
  ): Promise<UpdateResult> {
    const storeID = await this.storeService.getStoreIdByName(storeName);
    const drinkID = await this.drinkService.getDrinkIdByName(drinkName);
    return await this.drinkPriceRepository
      .createQueryBuilder()
      .update(drinkPrice)
      .set({ drinkPrice: newDrinkPrice })
      .where('store_id = :store_id', { store_id: storeID.id })
      .andWhere('drink_id = :drink_id', { drink_id: drinkID.id })
      .execute();
  }
}
