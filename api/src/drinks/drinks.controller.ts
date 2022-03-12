import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { Drink } from './drinks.entity';
import { drinkDto } from './drink.dto';

@Controller('drinks')
@UseInterceptors(ClassSerializerInterceptor)
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Get(':drinkName')
  async getDrink(@Param() params) {
    return await this.drinksService.getDrinkIdByName(params.drinkName);
  }

  @Post('addDrink')
  async addDrink(@Body() drink: drinkDto) {
    return this.drinksService.addDrink(drink.drinkName);
  }
}
