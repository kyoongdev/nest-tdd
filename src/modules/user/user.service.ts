import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entity';
import { USER_REPOSITORY } from './user.providers';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findUsers() {
    return await this.userRepository.find({});
  }

  async findUser(name: string) {
    return await this.userRepository.findOne({
      where: {
        name,
      },
    });
  }

  async createUser(user: { name: string; email: string }) {
    await this.findUser(user.name);

    const newUser = await this.userRepository.save(user);
    return newUser;
  }
}
