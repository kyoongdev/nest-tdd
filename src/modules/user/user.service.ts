import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entity';
import { USER_REPOSITORY } from './user.providers';
import { UserException } from './exception/user.exception';
import { USER_ERROR_CODE } from './exception/errorCode';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findUsers() {
    return await this.userRepository.find({});
  }

  async findUser(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new UserException(USER_ERROR_CODE.NOT_FOUND);
    }

    return user;
  }

  async createUser(user: { name: string; email: string }) {
    await this.findUser(user.name);

    const newUser = await this.userRepository.save(user);
    return newUser;
  }
}
