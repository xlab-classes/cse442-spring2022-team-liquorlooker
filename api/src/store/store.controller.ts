import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Param,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { storeService } from './store.service';
import { store } from './store.entity';
import { storeDto } from './store.dto';
import { updateStoreDto } from './updateStoreDto.dto';
import { radiusDto } from './radiusDto.dto';

@Controller('store')
@UseInterceptors(ClassSerializerInterceptor)
export class storeController {
  constructor(private readonly storeService: storeService) {}

  @Get('getStore')
  async getStore(@Body() storeDto: storeDto): Promise<store> {
    return await this.storeService.getStoreIdByName(storeDto.storeName);
  }
  @Get('getLocation')
  async getStoreLocation(@Body() storeDto: storeDto): Promise<store> {
    return await this.storeService.getStoreLocation(storeDto.storeName);
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

  @Get('getStoresInRadius')
  async getStoresinrad(@Body() radiusDto: radiusDto): Promise<store[]> {
    return await this.storeService.getStoreWithinRadius(
      radiusDto.radius,
      radiusDto.latitude,
      radiusDto.longitude,
    );
  }
}
