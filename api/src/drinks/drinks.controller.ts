import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { Drink } from './drinks.entity';

@Controller('drinks')
@UseInterceptors(ClassSerializerInterceptor)
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Get('getDrink/:drinkName')
  async getDrink(@Param() drink): Promise<Drink> {
    return await this.drinksService.getDrinkIdByName(drink.drinkName);
  }
}
