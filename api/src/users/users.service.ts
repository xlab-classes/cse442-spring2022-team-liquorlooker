import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { Role } from '../auth/auth.role.enum'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUserByEmail(email: string): Promise<User> {
    return await this.usersRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email: email })
      .getOne();
  }

  async getUserById(id: number): Promise<User> {
    return await this.usersRepository.findOne(id)
  }

  async userWithEmailExists(email: string): Promise<boolean> {
    const user = await this.getUserByEmail(email);
    if (user) {
      return true;
    }
    return false;
  }

  async createUser(email: string, password: string): Promise<User> {
    if (await this.userWithEmailExists(email)) {
      throw HttpStatus.BAD_REQUEST;
    }
    const user = await this.usersRepository.create({
      email: email,
      password: password,
      role: "user"
    });
    await this.usersRepository.save(user);
    return user;
  }

  async createBusiness(email: string, password: string, storeName: string): Promise<User> {
    if (await this.userWithEmailExists(email)) {
      throw HttpStatus.BAD_REQUEST;
    }
    const user = await this.usersRepository.create({
      email: email,
      password: password,
      role: "business",
      storeName: storeName
    });
    await this.usersRepository.save(user);
    return user;
  }
}
