
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Playlist } from './playlist.entity';
import { Record } from './record.entity';

@Entity('playlist_records')
export class PlaylistRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Playlist)
  @JoinColumn({ name: 'playlist_id' })
  playlist: Playlist;

  @ManyToOne(() => Record)
  @JoinColumn({ name: 'record_id' })
  record: Record;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;

  @Column('jsonb')
  meta: object;
}