import {
    ClassSerializerInterceptor,
    Controller,
    UseInterceptors,
    Post,
    UseGuards,
    Request,
    Body,
    Get
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./jwt/local.auth-guard";
import { AuthDto } from "./dto/auth.dto";
import { User } from "src/users/users.entity";
import { JwtAuthGuard } from "./jwt/jwt.auth-guard";
import { Roles } from "./auth.role.decorator";
import { Role } from "./auth.role.enum";
import { RolesGuard } from "./auth.role.guard";


@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('user/register')
  async registerUser(@Body() credentials: AuthDto): Promise<User> {
    const { email, password } = credentials;
    return await this.authService.registerUser(email, password);
  }

  @Post('business/register')
  async registerBusiness(@Body() credentials: AuthDto): Promise<User> {
    const { email, password, storeName } = credentials;
    return await this.authService.registerBusiness(email, password, storeName);
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
    return this.authService.getSelf(req.user.email);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('userRoleTest')
  @Roles(Role.User)
  async userRoleTest() {
    return "Only standard users here";
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('businessRoleTest')
  @Roles(Role.Business)
  async businessRoleTest() {
    return "Only business users here";
  }
}
