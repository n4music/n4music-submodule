import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('labels')
export class Label {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;

  @Column('jsonb')
  meta: object;
}