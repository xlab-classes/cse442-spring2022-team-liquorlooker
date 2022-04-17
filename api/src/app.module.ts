import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Drink } from './drinks/drinks.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { AuthService } from './auth/auth.service';
import { DrinksModule } from './drinks/drinks.module';
import { drinkPrice } from './drinkPrice/drinkPrice.entity';
import { store } from './store/store.entity';
import { storeModule } from './store/store.module';
import { DrinksPriceModule } from './drinkPrice/drinkPrice.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/auth.role.guard';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    DrinksModule,
    storeModule,
    DrinksPriceModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Drink, drinkPrice, store],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AuthService],
})
export class AppModule {}
