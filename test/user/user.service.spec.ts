import { PrismaService } from '@/database/prisma.service';
import { UserService } from '@/modules/user/user.service';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import type { PrismaClient } from '@prisma/client';
import { type DeepMockProxy, mockDeep } from 'jest-mock-extended';

describe('UserService', () => {
  let app: TestingModule;
  let userService: UserService;
  let prismaService: DeepMockProxy<PrismaService>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [UserService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    userService = app.get<UserService>(UserService);
    prismaService = app.get<DeepMockProxy<PrismaService>>(PrismaService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
    expect(prismaService).toBeDefined();
  });

  describe('createUser', () => {
    it('유저 생성', async () => {
      const user = {
        id: '1',
        name: 'Rich',
        email: 'hello@prisma.io',
        age: 12,
      };
      prismaService.user.create.mockResolvedValue(user);
      // console.log(prismaService.user?.create);
      // prismaService.user.create.mockResolvedValue(user);

      await expect(userService.createUser(user)).resolves.toEqual({
        id: '1',
        name: 'Rich',
        email: 'hello@prisma.io',
        age: 12,
      });
    });
  });
});
