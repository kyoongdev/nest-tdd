import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity';
import { UserService } from './user.service';

const mockUserRepository = () => ({
  findOne: jest.fn(),
  find: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  findAndCount: jest.fn(),
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
          provide: getRepositoryToken(UserEntity),
          useValue: mockUserRepository(),
        },
      ],
    }).compile();
    service = app.get<UserService>(UserService);
    userRepository = app.get<MockRepository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  const createArgs = new UserEntity();
  createArgs.name = 'test';
  createArgs.email = 'testEmail';

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('유저들 찾기 (에러)', async () => {
    userRepository.findAndCount.mockReturnValue([[], 0]);
    const result = await service.findUsers({});
    console.log(result);
    expect(result).toEqual([]);
  });
});
