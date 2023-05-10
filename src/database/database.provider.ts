import { FactoryProvider } from '@nestjs/common';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Entities } from 'src/modules';
import { DataSource, DataSourceOptions } from 'typeorm';

export const typeORMConfig: DataSourceOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '1234user',
  database: 'nestjs',
  synchronize: true,
  entities: Entities,
  // dropSchema: true,
  logging: true,
};

export const databaseProviders: FactoryProvider[] = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(typeORMConfig);
      return dataSource.initialize();
    },
  },
];
