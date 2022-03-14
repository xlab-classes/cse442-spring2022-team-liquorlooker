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
import { storeDto } from 'src/store/store.dto';

@Controller('drinks')
@UseInterceptors(ClassSerializerInterceptor)
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Get('getDrinkid')
  async getDrink(@Body() drinkDto: drinkDto) {
    return await this.drinksService.getDrinkIdByName(drinkDto.drinkName);
  }
  @Get('exists')
  async drinkExists(@Body() drinkDto: drinkDto) {
    return await this.drinksService.drinkExists(drinkDto.drinkName);
  }
  @Post('addDrink')
  async addDrink(@Body() drinkDto: drinkDto) {
    return this.drinksService.addDrink(drinkDto.drinkName);
  }
}
