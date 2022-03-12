import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { drinkPrice } from './drinkPrice.entity';
import { drinkPriceService } from './drinkPrice.service';

@Controller('drinkPrice')
@UseInterceptors(ClassSerializerInterceptor)
export class drinkPriceController {
  constructor(private readonly drinkPriceService: drinkPriceService) {}
  @Get('getDrink/:drinkName')
  async getDrink(@Param() drink): Promise<drinkPrice[]> {
    return await this.drinkPriceService.getDrinkPricesByName(drink.drinkName);
  }
}
