import { FactoryProvider, Provider } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './entity';

export const userProviders: FactoryProvider<Repository<UserEntity>>[] = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];
