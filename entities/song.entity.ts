import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Artist } from './artist.entity';

@Entity('songs')
export class Song {
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

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;

  @Column('jsonb')
  meta: object;
}