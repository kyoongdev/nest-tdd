import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './entity';
import { userProviders } from './user.providers';

@Module({
  imports: [],
  providers: [UserService, ...userProviders],
  controllers: [UserController],
})
export class UserModule {}
