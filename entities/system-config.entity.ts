import { Column, Entity } from 'typeorm';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import Enum from '../common/constants';

@Entity({ name: 'system_config' })
export class SystemConfig extends CustomBaseEntity {
  @Column({ nullable: true, type: 'jsonb' })
  data: Record<string, any>;

  @Column({ nullable: true, unique: true })
  type: number;

  @Column({ nullable: true, default: Enum.SystemConfig.STATUS.ACTIVE })
  status: number;

  static createFromDto(data: Partial<SystemConfig>): SystemConfig {
    const result = new SystemConfig();
    result.data = data.data;
    result.type = data.type;
    result.status = data.status;
    return result;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      data: this.data,
      type: this.type,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
