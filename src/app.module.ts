import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import Modules from './modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmSetting } from './database/database.provider';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ...Modules,
    TypeOrmModule.forRootAsync({
      useFactory: () => typeOrmSetting,
      dataSourceFactory: async (options) =>
        new DataSource(options).initialize(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
