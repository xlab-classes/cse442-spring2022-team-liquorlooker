import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthDto } from './auth/dto/auth.dto';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/jwt/local.auth-guard';
import { User } from './users/users.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AppController {
  constructor(private readonly authService: AuthService) {}
}
