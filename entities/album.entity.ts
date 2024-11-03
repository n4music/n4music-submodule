import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Label } from './label.entity';
import { Artist } from './artist.entity';

@Entity('albums')
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  avatar: string;

  @ManyToOne(() => Label)
  @JoinColumn({ name: 'label_id' })
  label: Label;

  @ManyToOne(() => Artist)
  @JoinColumn({ name: 'artist_id' })
  artist: Artist;

  @Column('integer')
  type: number;

  @Column('integer')
  status: number;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;

  @Column('jsonb')
  meta: object;
}