import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import Modules from './modules';

import { DatabaseModule } from './database/database.module';
@Module({
  imports: [...Modules, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
