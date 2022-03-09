import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async userWithEmailExists(email: string): Promise<boolean> {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email: email })
      .getOne();
    if (user) {
      return true;
    }
    return false;
  }

  async createUser(email: string, password: string): Promise<User> {
    if (await this.userWithEmailExists(email)) {
      return null;
    }
    const user = await this.usersRepository.create({
      email: email,
      password: password
    });
    await this.usersRepository.save(user);
    return user;
  }
}
