import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drink } from 'src/drinks/drinks.entity';
import { DrinksModule } from 'src/drinks/drinks.module';
import { DrinksService } from 'src/drinks/drinks.service';
import { Repository } from 'typeorm';
import { drinkPrice } from './drinkPrice.entity';

@Injectable()
export class drinkPriceService {
  constructor(
    @InjectRepository(drinkPrice)
    private drinkPriceRepository: Repository<drinkPrice>,
    private drinkService: DrinksService,
  ) {}

  async getDrinkPricesByName(drinkName: string): Promise<drinkPrice[]> {
    const drinkID = await this.drinkService.getDrinkIdByName(drinkName);

    return await this.drinkPriceRepository
      .createQueryBuilder('drinkPrice')
      .where('drinkPrice.drink_id = :drinkID', { drinkID: drinkID })
      .getMany();
  }
}
