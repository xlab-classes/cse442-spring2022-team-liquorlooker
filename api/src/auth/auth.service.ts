import { HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(email: string, password: string): Promise<User> {
    return await this.usersService.createUser(email, password);
  }

    async registerBusiness(email: string, password: string, storeName: string): Promise<User> {
        return await this.usersService.createBusiness(email, password, storeName);
    }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.getUserByEmail(email);
    const hash = user.password;
    try {
      const isMatch = await bcrypt.compare(password, hash);
      if (isMatch) {
        return user;
      }
    } catch (error) {
      return error;
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return { access_token: this.jwtService.sign(payload) };
  }

  async getSelf(email: string): Promise<User> {
    return await this.usersService.getUserByEmail(email);
  }
}
