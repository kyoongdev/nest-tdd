import { PrismaModule } from '@/database/prisma.module';
import { PrismaService } from '@/database/prisma.service';
import { UserService } from '@/modules/user/user.service';
import { ConfigModule } from '@nestjs/config';
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

  describe('findUsers', () => {
    it('should return an array of users', async () => {
      const users = await userService.findUsers({
        where: {
          name: 'asdfs',
        },
      });
      console.log(users);
      expect(users).toBeDefined();
      expect(users).toBeInstanceOf(Array);
    });
  });
});
