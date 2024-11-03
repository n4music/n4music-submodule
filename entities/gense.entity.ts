import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('genses')
export class Gense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;

  @Column('jsonb')
  meta: object;
}