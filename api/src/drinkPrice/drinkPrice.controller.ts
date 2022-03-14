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
  @Get('getPrices')
  async getDrink(@Body() drinkPriceDto: drinkPriceDto): Promise<drinkPrice[]> {
    return await this.drinkPriceService.getDrinkPricesByName(
      drinkPriceDto.drinkName,
    );
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
