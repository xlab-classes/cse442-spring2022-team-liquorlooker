import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrinksService } from './drinks.service';
import { Drink } from './drinks.entity';
import { DrinksController } from './drinks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Drink])],
  providers: [DrinksService],
  exports: [DrinksService],
  controllers: [DrinksController],
})
export class DrinksModule {}
