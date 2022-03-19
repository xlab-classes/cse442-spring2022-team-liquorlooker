import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Param,
  Post,
  Body,
  Delete,
  Query,
} from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { Drink } from './drinks.entity';
import { drinkDto } from './drink.dto';
import { storeDto } from 'src/store/store.dto';
import { query } from 'express';

@Controller('drinks')
@UseInterceptors(ClassSerializerInterceptor)
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Get('getAllDrinkNames')
  async getAllNames() {
    return await this.drinksService.getAllDrinkNames();
  }
  @Get('getDrinkid')
  async getDrink(@Query() query) {
    return await this.drinksService.getDrinkIdByName(query.drinkName);
  }
  @Get('exists')
  async drinkExists(@Query() query) {
    return await this.drinksService.drinkExists(query.drinkName);
  }
  @Post('addDrink')
  async addDrink(@Body() drinkDto: drinkDto) {
    return this.drinksService.addDrink(drinkDto.drinkName);
  }
  @Delete('deleteDrink')
  async deleteDrink(@Body() drinkDto: drinkDto) {
    return this.drinksService.deleteDrink(drinkDto.drinkName);
  }
  @Post('updateDrinkName')
  async updateDrinkName(@Param() params) {
    return this.drinksService.updateDrink(
      params.drinkName,
      params.newDrinkName,
    );
  }
}
