import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikesService } from './likes.service';
import { Likes } from './likes.entity';
import { LikesController } from './likes.controller';
import { DrinksModule } from 'src/drinks/drinks.module';

@Module({
  imports: [TypeOrmModule.forFeature([Likes]), DrinksModule],
  providers: [LikesService],
  exports: [LikesService],
  controllers: [LikesController],
})
export class LikesModule {}
