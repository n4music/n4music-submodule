import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('genses')
export class Gense extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('jsonb')
  meta: object;
}
