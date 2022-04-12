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
import { query } from 'express';
import { UpdateDateColumn } from 'typeorm';
import { drinkPriceDto } from './drinkPrice.dto';
import { drinkPrice } from './drinkPrice.entity';
import { drinkPriceService } from './drinkPrice.service';

@Controller('drinkPrice')
@UseInterceptors(ClassSerializerInterceptor)
export class drinkPriceController {
  constructor(private readonly drinkPriceService: drinkPriceService) {}
  @Get('getPrices')
  async getDrink(@Query() query): Promise<drinkPrice[]> {
    return await this.drinkPriceService.getDrinkPricesByName(query.drinkName);
  }
  @Get('getStoreInventory')
  async getStoreInventory(@Query() query): Promise<drinkPrice[]> {
    return await this.drinkPriceService.getStoreInvetoryByName(query.storeName);
  }
  @Post('addDrinkPrice/')
  async addDrinkprice(@Body() drinkPriceDto: drinkPriceDto) {
    return await this.drinkPriceService.addDrinkPrice(
      drinkPriceDto.storeName,
      drinkPriceDto.drinkName,
      drinkPriceDto.drinkPrice,
    );
  }

  @Delete('deleteDrinkPrice')
  async deleteDrinkPrice(@Body() drinkPriceDto: drinkPriceDto) {
    return await this.drinkPriceService.deleteDrinkPrice(
      drinkPriceDto.storeName,
      drinkPriceDto.drinkName,
    );
  }

  @Post('updateDrinkPrice')
  async updateDrinkPrice(@Body() drinkPriceDto: drinkPriceDto) {
    return await this.drinkPriceService.updateDrinkPrice(
      drinkPriceDto.storeName,
      drinkPriceDto.drinkName,
      drinkPriceDto.drinkPrice,
    );
  }
  @Get('drinkInRadius')
  async drinksInRadius(@Query() query) {
    return await this.drinkPriceService.getDrinkPricesInRadius(
      query.radius,
      query.latitude,
      query.longitude,
      query.drinkName,
    );
  }
}
