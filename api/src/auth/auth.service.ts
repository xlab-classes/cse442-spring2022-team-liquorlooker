import { HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.entity';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async register(email: string, password: string): Promise<User> {
        return await this.usersService.createUser(email, password);
    }

    async login(email: string, password: string): Promise<User> {
        const user = await this.usersService.getUserByEmail(email);
        if (user && user.password === password) {
            return user;
        }
        throw HttpStatus.UNAUTHORIZED;
    }
}
