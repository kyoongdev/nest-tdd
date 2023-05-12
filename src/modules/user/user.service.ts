import { PrismaService } from '@/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly database: PrismaService) {}

  async findUsers(args = {} as Prisma.UserFindManyArgs) {
    const users = await this.database.user.findMany(args);
    return users;
  }

  async createUser(props: CreateUserDTO) {
    const user = await this.database.user.create({
      data: props,
    });
    return user;
  }

  async deleteUsers() {
    await this.database.user.deleteMany();
  }
}
