import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { store } from './store.entity';

@Injectable()
export class storeService {
  constructor(
    @InjectRepository(store)
    private storeRepository: Repository<store>,
  ) {}

  async getStoreIdByName(storeName: string): Promise<store> {
    return await this.storeRepository
      .createQueryBuilder('store')
      .where('store.storeName = :storeName', { storeName: storeName })
      .getOne();
  }
  //possible repeat
  //   async getStoreLocationByName(storeName: string): Promise<store> {
  //     return await this.storeRepository
  //       .createQueryBuilder('store')
  //       .where('store.storeName = :storeName', { storeName: storeName })
  //       .getOne();
  //   }
}
