import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import Enum from '../common/constants';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { ImagesType } from '../common/types/type';
import { ActivityAction } from './activity-action.entity';
import { Role } from './role.entity';

@Entity({ name: 'users' })
export class User extends CustomBaseEntity {
  @Column({ nullable: true })
  @Index({ fulltext: true })
  name: string;

  @Column({ nullable: true })
  @Index({ fulltext: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  gender: number;

  @Column({ nullable: true })
  birthday: string;

  @Column({
    nullable: true,
    default: Enum.User.STATUS.ACTIVE,
  })
  status: number;

  @Column({
    nullable: true,
    default: Enum.User.TYPE.USER,
  })
  type: number;

  @Column({
    nullable: true,
    name: 'avatar_id',
  })
  avatarId: string;

  @Column({
    nullable: true,
    type: 'jsonb',
    default: {},
  })
  images: Pick<ImagesType, 'avatar'>;

  @Column({
    name: 'token_info',
    nullable: true,
    type: 'jsonb',
    default: {},
    select: false,
  })
  tokenInfo: { crm: string };

  @Column({
    name: 'login_info',
    nullable: true,
    type: 'jsonb',
    default: {},
    select: false,
  })
  loginInfo: any;

  @Column({
    name: 'creator_id',
    nullable: true,
  })
  creatorId: number;

  @Column({
    name: 'creator_info',
    nullable: true,
    type: 'jsonb',
    default: {},
  })
  creatorInfo: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'creator_id' })
  creator: User;

  @OneToMany(() => ActivityAction, (activityAction) => activityAction.user)
  activityActions: ActivityAction[];

  @ManyToOne(() => Role, (role) => role.users, { onDelete: 'SET NULL' })
  role: Role;

  static createFromDto(createDto: Partial<User>): User {
    const user = new User();
    user.name = createDto.name;
    user.gender = createDto.gender;
    user.phone = createDto.phone;
    user.status = createDto.status;
    user.type = createDto.type;
    user.email = createDto.email;
    user.password = createDto.password;
    user.address = createDto.address;
    user.avatarId = createDto.avatarId;
    return user;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      address: this.address,
      gender: this.gender,
      birthday: this.birthday,
      status: this.status,
      type: this.type,
      avatarId: this.avatarId,
      images: this.images,
      creatorId: this.creatorId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
