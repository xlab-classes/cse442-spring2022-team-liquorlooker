import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { drinkPrice } from './drinkPrice.entity';
import { drinkPriceService } from './drinkPrice.service';
import { drinkPriceController } from './drinkPrice.controller';

@Module({
  imports: [TypeOrmModule.forFeature([drinkPrice]), DrinksModule],
  providers: [drinkPriceService],
  exports: [drinkPriceService],
  controllers: [drinkPriceController],
})
export class DrinksModule {}
