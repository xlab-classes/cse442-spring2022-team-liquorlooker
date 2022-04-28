import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DrinksService } from 'src/drinks/drinks.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Comments } from './comments.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private commentsRepository: Repository<Comments>,
    private drinkService: DrinksService,
  ) {}

  async getCommentsByDrinkName(drinkName: string): Promise<Comments[]> {
    try {
      return await this.commentsRepository.find({
        where: [{ drinkName: drinkName }],
      });
    } catch (error) {
      return error;
    }
  }

  async addComment(
    userName: string,
    comment: string,
    drinkName: string,
  ): Promise<Comments> {
    const drinkID = await this.drinkService.getDrinkIdByName(drinkName);
    const commentToAdd = await this.commentsRepository.create({
      drink_id: drinkID.id,
      drinkName: drinkName,
      userName: userName,
      comment: comment,
    });
    try {
      return await this.commentsRepository.save(commentToAdd);
    } catch (error) {
      return error;
    }
  }
}
