import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drink } from 'src/drinks/drinks.entity';
import { DrinksModule } from 'src/drinks/drinks.module';
import { DrinksService } from 'src/drinks/drinks.service';
import { store } from 'src/store/store.entity';
import { storeService } from 'src/store/store.service';
import { DeleteResult, In, Repository, UpdateResult } from 'typeorm';
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
    try {
      const drinkID = await this.drinkService.getDrinkIdByName(drinkName);
      const drinkPrices = await this.drinkPriceRepository.find({
        select: ['storeName', 'drinkName', 'drinkPrice'],
        where: [{ drink_id: drinkID.id }],
      });
      return drinkPrices;
    } catch (error) {
      return error;
    }
  }

  async getStoreInvetoryByName(storeName: string): Promise<drinkPrice[]> {
    try {
      const storeID = await this.storeService.getStoreIdByName(storeName);
      const inventory = await this.drinkPriceRepository.find({
        where: [{ store_id: storeID.id }],
      });
      return inventory;
    } catch (error) {
      return error;
    }
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
    try {
      await this.drinkPriceRepository.save(toBeAdded);
      return toBeAdded;
    } catch (error) {
      return error;
    }
  }

  async deleteDrinkPrice(
    storeName: string,
    drinkName: string,
  ): Promise<DeleteResult> {
    const storeID = await this.storeService.getStoreIdByName(storeName);
    const drinkID = await this.drinkService.getDrinkIdByName(drinkName);
    try {
      return await this.drinkPriceRepository
        .createQueryBuilder()
        .delete()
        .from(drinkPrice)
        .where('store_id = :store_id', { store_id: storeID.id })
        .andWhere('drink_id = :drink_id', { drink_id: drinkID.id })
        .execute();
    } catch (error) {
      return error;
    }
  }

  async updateDrinkPrice(
    storeName: string,
    drinkName: string,
    newDrinkPrice: number,
  ): Promise<UpdateResult> {
    const storeID = await this.storeService.getStoreIdByName(storeName);
    const drinkID = await this.drinkService.getDrinkIdByName(drinkName);
    try {
      return await this.drinkPriceRepository
        .createQueryBuilder()
        .update(drinkPrice)
        .set({ drinkPrice: newDrinkPrice })
        .where('store_id = :store_id', { store_id: storeID.id })
        .andWhere('drink_id = :drink_id', { drink_id: drinkID.id })
        .execute();
    } catch (error) {
      return error;
    }
  }

  async getDrinkPricesInRadius(
    radius: number,
    currLat: number,
    currLong: number,
    drinkName: string,
  ): Promise<drinkPrice[]> {
    const arr = await this.storeService.getStoreWithinRadius(
      radius,
      currLat,
      currLong,
      drinkName,
    );
    const drinkID = arr[0];
    const storeIDs = arr[1];
    const use = [];
    for (let id in storeIDs) {
      use.push(parseInt(id));
    }
    console.log(storeIDs);
    // return await this.drinkPriceRepository
    //   .createQueryBuilder('store')
    //   .innerJoinAndSelect('store.id', 'dp', 'dp.store_id = store.id')
    //   .where('store.store_id IN (:...id)', { id: use })
    //   .getMany();

    return await this.drinkPriceRepository.query(
      `SELECT * FROM store INNER JOIN drink_price ON drink_price.store_id=store.id WHERE drink_id = ${drinkID.id} AND store_id IN (${use})`,
    );
  }
}
