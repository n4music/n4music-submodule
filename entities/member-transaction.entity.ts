import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'members_transactions' })
export class MemberTransaction extends CustomBaseEntity {
  @Column({ nullable: true, name: 'member_id' })
  memberId: number;

  @Column({
    nullable: true,
  })
  type: number;

  serialize(): Record<string, any> {
    return {
      id: this.id,
      memberId: this.memberId,
      type: this.type,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
