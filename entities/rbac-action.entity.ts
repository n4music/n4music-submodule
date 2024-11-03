import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import Enum from '../common/constants';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { RbacModule } from './rbac-module.entity';
import { RoleAction } from './role-action.entity';

@Entity({ name: 'rbac_actions' }) // Explicitly set table name
export class RbacAction extends CustomBaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  key: string;

  @Column({
    nullable: true,
    default: Enum.RbacAction.STATUS.ACTIVE,
  })
  status: number;

  @Column({ name: 'rbac_module_id' })
  rbacModuleId: number;

  @OneToMany(() => RoleAction, (roleAction) => roleAction.rbacAction)
  roleActions: RoleAction[];

  @ManyToOne(() => RbacModule, (rbacModule) => rbacModule.rbacActions)
  rbacModule: RbacModule;

  static createFromDto(createDto: Partial<RbacAction>): RbacAction {
    const rbacAction = new RbacAction();
    Object.assign(rbacAction, createDto);
    return rbacAction;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      key: this.key,
      status: this.status,
      rbacModuleId: this.rbacModuleId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
