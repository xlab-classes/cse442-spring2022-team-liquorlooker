import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './jwt/local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
<<<<<<< HEAD
],
  providers: [AuthService, LocalStrategy, JwtStrategy],
=======
    ConfigModule,
  ],
  providers: [AuthService, LocalStrategy],
>>>>>>> sprint2-issue#64
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
