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
}
