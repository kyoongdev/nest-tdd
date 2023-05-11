import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { UserEntity } from './entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findUsers(args = {} as FindManyOptions<UserEntity>) {
    const [rows, count] = await this.userRepository.findAndCount(args);
    const result = await this.userRepository
      .createQueryBuilder('user')
      .select('user.name as name')
      .groupBy('user.name')
      .addSelect(`COUNT(*) AS count`)
      .getRawMany<{ name: string; count: string }>();

    return {
      users: rows,
      count,
    };
  }

  async findUser(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      // throw new UserException(USER_ERROR_CODE.NOT_FOUND);
    }

    return user;
  }

  async createUser(user: { name: string; email: string }) {
    await this.findUser(user.name);

    const newUser = await this.userRepository.save(user);
    return newUser;
  }
}
