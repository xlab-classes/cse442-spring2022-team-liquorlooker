import { HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async register(email: string, password: string): Promise<User> {
        return await this.usersService.createUser(email, password);
    }

    async validateUser(email: string, password: string): Promise<User> {
        const user = await this.usersService.getUserByEmail(email);
        if (user && user.password === password) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.userId };
        return { access_token: this.jwtService.sign(payload), };
    }

    async getSelf(id: number): Promise<User> {
        return await this.usersService.getUserById(id)
    }
}
