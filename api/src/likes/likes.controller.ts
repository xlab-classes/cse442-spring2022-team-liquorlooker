import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Param,
  Post,
  Body,
  Delete,
  Query,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { Likes } from './likes.entity';
import { query } from 'express';

@Controller('likes')
@UseInterceptors(ClassSerializerInterceptor)
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post('bumpLikes')
  async addLike(@Body() body) {
    return await this.likesService.increaseLikeCount(body.drinkName);
  }

  @Get('getLikes')
  async getLikes(@Body() body) {
    return await this.likesService.getLikeCount(body.drinkName);
  }
}
