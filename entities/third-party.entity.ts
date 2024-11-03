import { Column, Entity } from 'typeorm';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';

@Entity({ name: 'third_party_responses' })
export class ThirdPartyResponse extends CustomBaseEntity {
  @Column({
    name: 'transaction_id',
    nullable: true,
  })
  transactionId: number;

  @Column({
    name: 'member_id',
    nullable: true,
  })
  memberId: number;

  @Column({
    name: 'type',
    nullable: true,
  })
  type: number;
  @Column({
    name: 'status',
    nullable: true,
  })
  status: number;

  @Column({
    nullable: true,
    type: 'jsonb',
    default: {},
  })
  request: any;

  @Column({
    nullable: true,
    type: 'jsonb',
    default: {},
  })
  response: any;

  static createFromDto(data: Partial<ThirdPartyResponse>): ThirdPartyResponse {
    const result = new ThirdPartyResponse();
    result.type = data.type;
    result.status = data.status;
    result.memberId = data.memberId;
    result.request = data.request;
    result.response = data.response;
    result.transactionId = data.transactionId;
    return result;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      transactionId: this.transactionId,
      memberId: this.memberId,
      type: this.type,
      status: this.status,
      request: this.request,
      response: this.response,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
