import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthDto } from './auth/auth.dto';
import { AuthService } from './auth/auth.service';
import { User } from './users/users.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth/register')
  async register(@Body() credentials: AuthDto): Promise<User> {
    const {email, password} = credentials;
    return await this.authService.register(email, password);
  }
}
