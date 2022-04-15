import {
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './jwt/local.auth-guard';
import { AuthDto } from './dto/auth.dto';
import { User } from 'src/users/users.entity';
import { JwtAuthGuard } from './jwt/jwt.auth-guard';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() credentials: AuthDto): Promise<User> {
    const { email, password } = credentials;
    return await this.authService.register(email, password);
  }
  @Post('validateUser')
  async validate(@Body() credentials: AuthDto): Promise<User> {
    const { email, password } = credentials;
    return await this.authService.validateUser(email, password);
  }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req) {
    return req.user;
  }
}
