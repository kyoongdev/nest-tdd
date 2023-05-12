import { PrismaModule } from '@/database/prisma.module';
import { PrismaService } from '@/database/prisma.service';
import { UserService } from '@/modules/user/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('UserService', () => {
  let app: TestingModule;
  let userService: UserService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [UserService, PrismaService],
    }).compile();

    userService = app.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('findUsers / findUser', () => {
    it('유저 찾기[빈 배열] (성공)', async () => {
      await expect(userService.findUsers()).resolves.toEqual([]);
    });

    it('유저 찾기[where clause] (성공)', async () => {
      const users = [
        {
          id: '1',
          name: 'Rich',
          email: 'hello@prisma.io',
          age: 12,
        },
        {
          id: '2',
          name: 'James',
          email: 'james@prisma.io',
          age: 16,
        },
      ];

      const createdUsers = await Promise.all(
        users.map((user) => userService.createUser(user)),
      );

      await expect(userService.findUsers()).resolves.toEqual(createdUsers);
      await expect(
        userService.findUsers({
          where: {
            name: 'Rich',
          },
        }),
      ).resolves.toEqual([users[0]]);
    });
  });

  describe('createUser', () => {
    it('유저 생성', async () => {
      const user = {
        id: '1',
        name: 'Rich',
        email: 'hello@prisma.io',
        age: 12,
      };

      await expect(userService.createUser(user)).resolves.toEqual({
        id: '1',
        name: 'Rich',
        email: 'hello@prisma.io',
        age: 12,
      });
    });
  });

  afterEach(async () => {
    await userService.deleteUsers();
  });
});
