import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Drink } from './drinks.entity';

@Injectable()
export class DrinksService {
  constructor(
    @InjectRepository(Drink)
    private drinksRepository: Repository<Drink>,
  ) {}

  async getDrinkIdByName(drinkName: string): Promise<Drink> {
    try {
      return await this.drinksRepository.findOne({
        select: ['id'],
        where: [{ drinkName: drinkName }],
      });
    } catch (error) {
      return error;
    }
  }

  async drinkExists(drinkName: string): Promise<String> {
    const count = await this.drinksRepository.count({ drinkName: drinkName });

    if (count === 0) {
      const obj = { drinkExists: false };
      return JSON.stringify(obj);
    } else {
      const obj = { drinkExists: true };
      return JSON.stringify(obj);
    }
  }

  async addDrink(drinkName: string): Promise<Drink> {
    const drink = await this.drinksRepository.create({
      drinkName: drinkName,
    });
    try {
      return await this.drinksRepository.save(drink);
    } catch (error) {
      return error;
    }
  }

  async deleteDrink(drinkName: string): Promise<DeleteResult> {
    return await this.drinksRepository
      .createQueryBuilder()
      .delete()
      .from(Drink)
      .where('drinkName = :drinkName', { drinkName: drinkName })
      .execute();
  }

  async updateDrink(
    drinkName: string,
    newDrinkName: string,
  ): Promise<UpdateResult> {
    return await this.drinksRepository
      .createQueryBuilder()
      .update(Drink)
      .set({ drinkName: newDrinkName })
      .where('drinkName = :drinkName', { drinkName: drinkName })
      .execute();
  }

  async getAllDrinkNames(): Promise<Drink[]> {
    return await this.drinksRepository.query('SELECT drinkName FROM drink');
  }

  async partialSearchByName(partialName: string): Promise<Drink[]> {
    return await this.drinksRepository.query(`SELECT drinkName from drink WHERE drinkName LIKE %${partialName}%`)
  }
}
