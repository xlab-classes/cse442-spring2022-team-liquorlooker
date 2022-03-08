import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'oceanus.cse.buffalo.edu',
      port: 3306,
      username: 'mcfocacc',
      password: '50235965',
      database: 'mcfocacc_db',
      entities: [User],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
