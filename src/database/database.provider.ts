import { FactoryProvider } from '@nestjs/common';
import { Entities } from 'modules';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '1234user',
  database: 'nestjs',
  synchronize: false,
  entities: Entities,
  logging: true,
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
});

export const DATA_SOURCE = Symbol('DATA_SOURCE');

export const databaseProviders: FactoryProvider[] = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => dataSource.initialize(),
  },
];

export default dataSource;
