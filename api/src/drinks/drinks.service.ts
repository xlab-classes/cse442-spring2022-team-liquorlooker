import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Drink } from './drinks.entity';

@Injectable()
export class DrinksService {
  constructor(
    @InjectRepository(Drink)
    private drinksRepository: Repository<Drink>,
  ) {}

  async getDrinkIdByName(drinkName: string): Promise<Drink> {
    return await this.drinksRepository.findOne({
      select: ['id'],
      where: [{ drinkName: drinkName }],
    });
  }

  async drinkExists(drinkName: string): Promise<boolean> {
    const count = await this.drinksRepository.count({ drinkName: drinkName });

    if (count === 0) {
      return false;
    } else {
      return true;
    }
  }

  async addDrink(drinkName: string): Promise<Drink> {
    const drink = await this.drinksRepository.create({
      drinkName: drinkName,
    });

    await this.drinksRepository.save(drink);
    return drink;
  }
}
