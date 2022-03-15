import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Double, Repository, UpdateResult } from 'typeorm';
import { store } from './store.entity';

@Injectable()
export class storeService {
  constructor(
    @InjectRepository(store)
    private storeRepository: Repository<store>,
  ) {}

  //Add store to store table with location and store name
  async addStore(
    storeName: string,
    latitude: number,
    longitude: number,
  ): Promise<store> {
    const store = await this.storeRepository.create({
      storeName: storeName,
      latitude: latitude,
      longitude: longitude,
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
      select: ['latitude', 'longitude'],
      where: [{ storeName: storeName }],
    });
  }

  async deleteStore(storeName: string): Promise<DeleteResult> {
    return await this.storeRepository
      .createQueryBuilder()
      .delete()
      .from(store)
      .where('storeName = :storeName', { storeName: storeName })
      .execute();
  }

  async updateStore(
    storeName: string,
    newStoreName: string,
    latitude: number,
    longitude: number,
  ): Promise<UpdateResult> {
    return await this.storeRepository
      .createQueryBuilder()
      .update(store)
      .set({
        storeName: newStoreName,
        latitude: latitude,
        longitude: longitude,
      })
      .where('storeName = :storeName', { storeName: storeName })
      .execute();
  }
  async getStoreWithinRadius(
    radius: number,
    currLat: number,
    currLong: number,
  ): Promise<store[]> {
    return await this.storeRepository.query(
      `SELECT *, ( 3959 * acos( cos( radians(${currLat}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(${currLong}) ) + sin( radians(${currLat}) ) * sin( radians( latitude ) ) ) ) AS distance FROM store HAVING distance < ${radius} ORDER BY distance;`,
    );
  }
}
