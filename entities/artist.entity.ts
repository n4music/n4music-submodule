import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('artists')
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('integer')
  status: number;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;

  @Column('jsonb')
  meta: object;
}