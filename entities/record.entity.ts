import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Song } from './song.entity';
import { Gense } from './gense.entity';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';

@Entity('records')
export class Record extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  duration: string;

  @Column('varchar')
  file: string;

  @ManyToOne(() => Song)
  @JoinColumn({ name: 'song_id' })
  song: Song;

  @ManyToOne(() => Gense)
  @JoinColumn({ name: 'gense_id' })
  gense: Gense;

  @Column('jsonb')
  meta: object;
}
