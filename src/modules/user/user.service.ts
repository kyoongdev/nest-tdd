import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<UserEntity>,
  ) {}

  async findUsers() {
    return await this.userRepository.find({
      where: {},
    });
  }
}
