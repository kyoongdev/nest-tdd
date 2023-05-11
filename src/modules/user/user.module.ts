import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

import { userProviders } from './user.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity';

@Module({
  imports: [],
  providers: [UserService, ...userProviders],
  controllers: [UserController],
})
export class UserModule {}
