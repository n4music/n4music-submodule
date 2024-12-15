import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Artist } from './artist.entity';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { Playlist } from './playlist.entity';

@Entity('songs')
export class Song extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  avatar: string;

  @Column('integer')
  type: number;

  @ManyToOne(() => Artist)
  @JoinColumn({ name: 'artist_id' })
  artist: Artist;

  @Column('integer')
  status: number;

  @Column('jsonb')
  meta: object;

  @ManyToMany(() => Playlist, playlist => playlist.songs)
  playlists: Playlist[];
}
