import { Column, Entity, OneToMany } from 'typeorm';
import Enum from '../common/constants';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { RoleAction } from './role-action.entity';
import { User } from './user.entity';

@Entity({ name: 'roles' })
export class Role extends CustomBaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    nullable: true,
    default: Enum.RbacRole.STATUS.ACTIVE,
  })
  status: number;

  @OneToMany(() => RoleAction, (roleAction) => roleAction.role)
  roleActions: RoleAction[];

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  static createFromDto(createDto: Partial<Role>): Role {
    const role = new Role();
    Object.assign(role, createDto);
    return role;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
