import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Album } from './album.entity';
import { Record } from './record.entity';

@Entity('album_records')
export class AlbumRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Album)
  @JoinColumn({ name: 'album_id' })
  album: Album;

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