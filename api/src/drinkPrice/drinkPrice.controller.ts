import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { drinkPriceDto } from './drinkPrice.dto';
import { drinkPrice } from './drinkPrice.entity';
import { drinkPriceService } from './drinkPrice.service';

@Controller('drinkPrice')
@UseInterceptors(ClassSerializerInterceptor)
export class drinkPriceController {
  constructor(private readonly drinkPriceService: drinkPriceService) {}
  @Get(':drinkName')
  async getDrink(@Param() drink): Promise<drinkPrice[]> {
    return await this.drinkPriceService.getDrinkPricesByName(drink.drinkName);
  }
  @Post('addDrinkPrice/')
  async addDrinkprice(@Body() drinkPriceDto: drinkPriceDto) {
    return await this.drinkPriceService.addDrinkPrice(
      drinkPriceDto.storeName,
      drinkPriceDto.drinkName,
      drinkPriceDto.drinkPrice,
    );
  }
}
