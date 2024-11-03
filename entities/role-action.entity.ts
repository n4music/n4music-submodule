import { Column, Entity, ManyToOne } from 'typeorm';
import Enum from '../common/constants';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { RbacAction } from './rbac-action.entity';
import { Role } from './role.entity';

@Entity({ name: 'role_actions' }) // Explicitly set table name
export class RoleAction extends CustomBaseEntity {
  @Column({ name: 'role_id' })
  roleId: number;

  @Column({ name: 'rbac_action_id' })
  rbacActionId: number;

  @Column({
    nullable: true,
    default: Enum.RbacRoleAction.STATUS.ACTIVE,
  })
  status: number;

  @ManyToOne(() => Role, (role) => role.roleActions)
  role: Role;

  @ManyToOne(() => RbacAction, (rbacAction) => rbacAction.roleActions)
  rbacAction: RbacAction;

  static createFromDto(createDto: Partial<RoleAction>): RoleAction {
    const roleAction = new RoleAction();
    Object.assign(roleAction, createDto);
    return roleAction;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      roleId: this.roleId,
      rbacActionId: this.rbacActionId,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
