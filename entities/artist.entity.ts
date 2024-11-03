import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('artists')
export class Artist extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('integer')
  status: number;

  @Column('jsonb')
  meta: object;
}