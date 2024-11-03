import Enum from '../common/constants';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'surveys' })
export class Survey extends CustomBaseEntity {
  @Column({ nullable: true })
  @Index({ fulltext: true })
  name: string;

  @Column({ nullable: true })
  @Index({ fulltext: true })
  type: number;

  @Column({ nullable: true, default: Enum.Survey.STATUS.NEW })
  status: number;

  @Column({ nullable: true, name: 'active_at' })
  activeAt: Date;

  @Column({ nullable: true, name: 'done_at' })
  doneAt: Date;

  @Column({
    nullable: true,
    name: 'max_feedback',
    default: 0,
  })
  maxFeedback: number;

  @Column({
    nullable: true,
    type: 'jsonb',
    default: {},
  })
  images: object;

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

  static createFromDto(createDto: Partial<Survey>): Survey {
    const survey = new Survey();
    survey.name = createDto.name;
    survey.type = createDto.type;
    survey.activeAt = createDto.activeAt;
    survey.doneAt = createDto.doneAt;
    survey.creatorId = createDto.creatorId;
    survey.creatorInfo = createDto.creatorInfo;
    return survey;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      status: this.status,
      activeAt: this.activeAt,
      doneAt: this.doneAt,
      maxFeedback: this.maxFeedback,
      images: this.images,
      creatorId: this.creatorId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
