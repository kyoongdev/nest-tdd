import { UserEntity } from '@/modules/user/entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'post' })
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ type: 'date' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  user: UserEntity;
}
