import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { storeController } from './store.controller';
import { store } from './store.entity';
import { storeService } from './store.service';

@Module({
  imports: [TypeOrmModule.forFeature([store])],
  providers: [storeService],
  exports: [storeService],
  controllers: [storeController],
})
export class storeModule {}
