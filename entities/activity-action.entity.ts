import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'activities_actions' })
export class ActivityAction extends CustomBaseEntity {
  @Column({ nullable: true, unique: true, name: 'action_log_key' })
  actionLogKey: string;

  @Column({ nullable: true, name: 'content' })
  content: string;

  @ManyToOne(() => User, (user) => user.activityActions)
  user: User;

  static createFromDto(createDto: Partial<ActivityAction>): ActivityAction {
    const data = new ActivityAction();
    data.actionLogKey = createDto.actionLogKey;
    data.content = createDto.content;
    return data;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      actionLogKey: this.actionLogKey,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
