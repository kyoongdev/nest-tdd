import { FactoryProvider } from '@nestjs/common';
import { DATA_SOURCE } from 'database/database.provider';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './entity';

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

export const userProviders: FactoryProvider<Repository<UserEntity>>[] = [
  {
    provide: USER_REPOSITORY,
    useFactory: (db: DataSource) => db.getRepository(UserEntity),
    inject: [DATA_SOURCE],
  },
];
