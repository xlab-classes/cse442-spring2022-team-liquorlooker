import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthDto } from './auth/auth.dto';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local.auth-guard';
import { User } from './users/users.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth/register')
  async register(@Body() credentials: AuthDto): Promise<User> {
    const { email, password } = credentials;
    return await this.authService.register(email, password);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
