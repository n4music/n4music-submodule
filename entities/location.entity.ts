import { Column, Entity } from 'typeorm';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';

@Entity({ name: 'locations' })
export class Location extends CustomBaseEntity {
  @Column({ type: 'varchar', nullable: true })
  name: string | null;

  @Column({ name: 'parent_id', type: 'int', nullable: true })
  parentId: number | null;

  @Column({ type: 'int', nullable: true })
  type: number | null;

  @Column({ type: 'jsonb', nullable: true })
  extra: Record<string, any> | null;

  @Column({ type: 'jsonb', nullable: true })
  logs: Record<string, any> | null;

  @Column({ name: 'area_id', type: 'int', nullable: true })
  areaId: number | null;

  @Column({ type: 'varchar', nullable: true })
  key: string | null;

  static createFromDto(createDto: Partial<Location>): Location {
    const location = new Location();
    Object.assign(location, createDto);
    return location;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      name: this.name,
      parentId: this.parentId,
      type: this.type,
      extra: this.extra,
      logs: this.logs,
      areaId: this.areaId,
      key: this.key,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
