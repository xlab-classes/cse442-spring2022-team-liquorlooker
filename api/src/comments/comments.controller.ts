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
import { CommentsService } from './comments.service';
import { Comments } from './comments.entity';
import { query } from 'express';

@Controller('comments')
@UseInterceptors(ClassSerializerInterceptor)
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('addComment')
  async addComment(@Body() Body) {
    console.log(Body);
    return await this.commentsService.addComment(
      Body.userName,
      Body.comment,
      Body.drinkName,
    );
  }

  @Get('getComments')
  async getComments(@Query() query) {
    return await this.commentsService.getCommentsByDrinkName(query.drinkName);
  }
}
