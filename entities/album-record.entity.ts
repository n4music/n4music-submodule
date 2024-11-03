import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Album } from './album.entity';
import { Record } from './record.entity';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';

@Entity('album_records')
export class AlbumRecord extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Album)
  @JoinColumn({ name: 'album_id' })
  album: Album;

  @ManyToOne(() => Record)
  @JoinColumn({ name: 'record_id' })
  record: Record;

  @Column('jsonb')
  meta: object;
}
