import { Body, Controller, Get, Post, UseGuards, Request, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthDto } from './auth/auth.dto';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local.auth-guard';
import { User } from './users/users.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
