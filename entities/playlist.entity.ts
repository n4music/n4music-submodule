import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Member } from './member.entity';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { Song } from './song.entity';

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

  @ManyToMany(() => Song, song => song.playlists)
  @JoinTable({
    name: 'playlist_songs',
    joinColumn: { name: 'playlist_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'song_id', referencedColumnName: 'id' }
  })
  songs: Song[];
}
