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
import { storeService } from './store.service';
import { store } from './store.entity';
import { storeDto } from './store.dto';
import { updateStoreDto } from './updateStoreDto.dto';
import { radiusDto } from './radiusDto.dto';
import { drinkPrice } from 'src/drinkPrice/drinkPrice.entity';

@Controller('store')
@UseInterceptors(ClassSerializerInterceptor)
export class storeController {
  constructor(private readonly storeService: storeService) {}

  @Get('getStore')
  async getStore(@Query() query): Promise<store> {
    return await this.storeService.getStoreIdByName(query.storeName);
  }
  @Get('getLocation')
  async getStoreLocation(@Query() query): Promise<store> {
    return await this.storeService.getStoreLocation(query.storeName);
  }
  @Post('addStore')
  async addStore(@Body() storeDto: storeDto): Promise<store> {
    return await this.storeService.addStore(
      storeDto.storeName,
      storeDto.latitude,
      storeDto.longitude,
    );
  }
  @Delete('deleteStore')
  async deleteStore(@Body() storeDto: storeDto) {
    await this.storeService.deleteStore(storeDto.storeName);
  }

  @Post('updateStoreDetails')
  async updatestore(@Body() updateStoreDto: updateStoreDto) {
    await this.storeService.updateStore(
      updateStoreDto.storeName,
      updateStoreDto.newStoreName,
      updateStoreDto.latitude,
      updateStoreDto.longitude,
    );
  }
}
