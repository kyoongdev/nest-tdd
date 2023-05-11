import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../post/entity';
import { UserEntity } from './entity';
import { UserService } from './user.service';
import { USER_REPOSITORY } from './user.providers';

export const getTypeOrmModule = () => {
  return TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '1234user',
    database: 'nestjs',
    synchronize: true,
    entities: [UserEntity, PostEntity],
    logging: true,
  });
};

const mockUserRepository = () => ({
  findOne: jest.fn(),
  find: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
});

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('UserService', () => {
  let app: TestingModule;
  let service: UserService;
  let userRepository: MockRepository<UserEntity>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: USER_REPOSITORY,
          useValue: mockUserRepository(),
        },
      ],
    }).compile();
    service = app.get<UserService>(UserService);
    userRepository = app.get<MockRepository<UserEntity>>('USER_REPOSITORY');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('유저들 찾기', async () => {
    userRepository.find.mockRejectedValue([]);
    const result = await service.findUsers();
    expect(result).toEqual([]);
  });

  it('유저 1명 찾기', async () => {
    const createArgs = new UserEntity();
    createArgs.name = 'test';
    createArgs.email = 'testEmail';
  });
});
