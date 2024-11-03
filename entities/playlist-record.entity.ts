import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Playlist } from './playlist.entity';
import { Record } from './record.entity';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';

@Entity('playlist_records')
export class PlaylistRecord extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Playlist)
  @JoinColumn({ name: 'playlist_id' })
  playlist: Playlist;

  @ManyToOne(() => Record)
  @JoinColumn({ name: 'record_id' })
  record: Record;

  @Column('jsonb')
  meta: object;
}
