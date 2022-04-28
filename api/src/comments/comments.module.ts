import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsService } from './comments.service';
import { Comments } from './comments.entity';
import { CommentsController } from './comments.controller';
import { DrinksModule } from 'src/drinks/drinks.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comments]), DrinksModule],
  providers: [CommentsService],
  exports: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
