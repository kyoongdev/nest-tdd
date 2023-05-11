import { Entities } from '@/modules';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
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

export const typeOrmSetting: TypeOrmModuleOptions = {
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
};

export default dataSource;
