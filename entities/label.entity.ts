import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('labels')
export class Label extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('jsonb')
  meta: object;
}
