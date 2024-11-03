import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Member } from './member.entity';

@Entity('playlist')
export class Playlist {
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

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;

  @Column('jsonb')
  meta: object;
}