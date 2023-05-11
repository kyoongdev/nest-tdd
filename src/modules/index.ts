import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { GlobalModule } from './global';

const Modules = [GlobalModule, UserModule, PostModule];

export default Modules;
