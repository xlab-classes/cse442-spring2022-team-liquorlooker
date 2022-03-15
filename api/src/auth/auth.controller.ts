import {
    ClassSerializerInterceptor,
    Controller,
    UseInterceptors,
    Post,
    UseGuards,
    Request,
    Body
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./jwt/local.auth-guard";
import { AuthDto } from "./dto/auth.dto";
import { User } from "src/users/users.entity";


@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() credentials: AuthDto): Promise<User> {
    const { email, password } = credentials;
    return await this.authService.register(email, password);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}