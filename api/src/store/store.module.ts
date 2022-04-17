import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { drinkPrice } from 'src/drinkPrice/drinkPrice.entity';
import { DrinksPriceModule } from 'src/drinkPrice/drinkPrice.module';
import { DrinksModule } from 'src/drinks/drinks.module';
import { storeController } from './store.controller';
import { store } from './store.entity';
import { storeService } from './store.service';

@Module({
  imports: [TypeOrmModule.forFeature([store]), DrinksModule],
  providers: [storeService],
  exports: [storeService],
  controllers: [storeController],
})
export class storeModule {}
