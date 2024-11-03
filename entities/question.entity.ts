import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Survey } from './survey.entity';

@Entity({ name: 'questions' })
export class Question extends CustomBaseEntity {
  @Column({ nullable: true })
  @Index({ fulltext: true })
  title: string;

  @Column({ nullable: true })
  @Index({ fulltext: true })
  type: number;

  @Column('text', { nullable: true, array: true })
  options: string[];

  @Column({ nullable: true })
  status: number;

  @Column({ nullable: true })
  required: boolean;

  @Column({ nullable: true, name: 'is_permanent' })
  isPermanent: boolean;

  @Column({
    nullable: true,
    type: 'jsonb',
    default: {},
  })
  images: object;

  @ManyToOne(() => Survey)
  @JoinColumn({ name: 'survey_id' })
  survey: Survey;

  static createFromDto(createDto: Partial<Question>): Question {
    const question = new Question();
    question.title = createDto.title;
    question.type = createDto.type;
    question.options = createDto.options;
    question.status = createDto.status;
    question.required = createDto.required;
    question.isPermanent = createDto.isPermanent;
    question.images = createDto.images;
    question.survey = createDto.survey;
    return question;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      title: this.title,
      type: this.type,
      options: this.options,
      status: this.status,
      required: this.required,
      images: this.images,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
