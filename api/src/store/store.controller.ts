import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { storeService } from './store.service';
import { store } from './store.entity';
import { storeDto } from './store.dto';

@Controller('store')
@UseInterceptors(ClassSerializerInterceptor)
export class storeController {
  constructor(private readonly storeService: storeService) {}

  @Get('getStore/:storeName')
  async getStore(@Param() store): Promise<store> {
    return await this.storeService.getStoreIdByName(store.storeName);
  }
  @Post('addStore')
  async addStore(@Body() storeDto: storeDto): Promise<store> {
    return await this.storeService.addStore(
      storeDto.storeName,
      storeDto.location,
    );
  }
}
