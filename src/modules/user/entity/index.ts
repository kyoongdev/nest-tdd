import { PostEntity } from '@/modules/post/entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  size: number;

  @OneToMany((type) => PostEntity, (post) => post.user)
  posts: PostEntity[];
}
