import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Member } from './member.entity';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';

@Entity('playlist')
export class Playlist extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  avatar: string;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @Column('jsonb')
  meta: object;
}
