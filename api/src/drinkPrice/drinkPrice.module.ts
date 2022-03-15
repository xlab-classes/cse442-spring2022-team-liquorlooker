import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { drinkPrice } from './drinkPrice.entity';
import { drinkPriceService } from './drinkPrice.service';
import { drinkPriceController } from './drinkPrice.controller';
import { storeModule } from 'src/store/store.module';
import { DrinksModule } from 'src/drinks/drinks.module';

@Module({
  imports: [TypeOrmModule.forFeature([drinkPrice]), DrinksModule, storeModule],
  providers: [drinkPriceService],
  exports: [drinkPriceService],
  controllers: [drinkPriceController],
})
export class DrinksPriceModule {}
