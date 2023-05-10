import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { UserEntity } from './user/entity';
import { PostEntity } from './post/entity';

const Modules = [UserModule, PostModule];
export const Entities = [UserEntity, PostEntity];

export default Modules;
