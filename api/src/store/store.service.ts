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

  //Add store to store table with location and store name
  async addStore(storeName: string, location: string): Promise<store> {
    const store = await this.storeRepository.create({
      storeName: storeName,
      location: location,
    });

    await this.storeRepository.save(store);
    return store;
  }

  //Get Store id based on name
  async getStoreIdByName(storeName: string): Promise<store> {
    return await this.storeRepository.findOne({
      select: ['id'],
      where: [{ storeName: storeName }],
    });
  }
  async getStoreNameById(store_id: number): Promise<store> {
    return await this.storeRepository.findOne({
      select: ['storeName'],
      where: [{ id: store_id }],
    });
  }
  async getStoreLocation(storeName: string): Promise<store> {
    return await this.storeRepository.findOne({
      select: ['location'],
      where: [{ storeName: storeName }],
    });
  }
}
