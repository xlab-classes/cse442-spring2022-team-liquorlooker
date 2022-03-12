import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { storeService } from './store.service';
import { store } from './store.entity';

@Controller('store')
@UseInterceptors(ClassSerializerInterceptor)
export class storeController {
  constructor(private readonly storeService: storeService) {}

  @Get('getStore/:storeName')
  async getDrink(@Param() store): Promise<store> {
    return await this.storeService.getStoreIdByName(store.storeName);
  }
}
