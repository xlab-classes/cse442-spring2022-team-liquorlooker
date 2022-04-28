import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DrinksService } from 'src/drinks/drinks.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Likes } from './likes.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Likes)
    private likesRepository: Repository<Likes>,
    private drinkService: DrinksService,
  ) {}

  async increaseLikeCount(drinkName: string) {
    try {
      const exists = await this.likeCountExists(drinkName);
      console.log(exists);
      if (exists) {
        const updateIt = await this.likesRepository
          .createQueryBuilder()
          .update()
          .set({
            like_count: () => 'like_count + 1',
          })
          .where('drinkName = :drinkName', { drinkName: drinkName })
          .execute();
        return updateIt;
      } else {
        const drinkID = await this.drinkService.getDrinkIdByName(drinkName);
        return await this.likesRepository
          .createQueryBuilder()
          .insert()
          .into(Likes)
          .values({
            drink_id: drinkID.id,
            drinkName: drinkName,
            like_count: 1,
          })
          .execute();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async likeCountExists(drinkName: string): Promise<Boolean> {
    const count = await this.likesRepository.count({ drinkName: drinkName });

    if (count === 0) {
      return false;
    } else {
      return true;
    }
  }

  async getLikeCount(drinkName: string): Promise<Likes> {
    try {
      return await this.likesRepository
        .createQueryBuilder()
        .where('drinkName = :drinkName', { drinkName: drinkName })
        .getOne();
    } catch (error) {
      console.log(error);
    }
  }
}
