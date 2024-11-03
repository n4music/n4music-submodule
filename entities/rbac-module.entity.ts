import { Column, Entity, OneToMany } from 'typeorm';
import Enum from '../common/constants';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { RbacAction } from './rbac-action.entity';

@Entity({ name: 'rbac_modules' }) // Explicitly set table name
export class RbacModule extends CustomBaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  key: string;

  @Column({
    nullable: true,
    default: Enum.RbacModule.STATUS.ACTIVE,
  })
  status: number;

  @OneToMany(() => RbacAction, (rbacAction) => rbacAction.rbacModule)
  rbacActions: RbacAction[];

  static createFromDto(createDto: Partial<RbacModule>): RbacModule {
    const rbacModule = new RbacModule();
    Object.assign(rbacModule, createDto);
    return rbacModule;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      key: this.key,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
