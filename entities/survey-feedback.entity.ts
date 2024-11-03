import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Member } from './member.entity';
import { Question } from './question.entity';
import { Survey } from './survey.entity';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';

@Entity({ name: 'survey_feedbacks' })
export class SurveyFeedback extends CustomBaseEntity {
  @Column('text', { nullable: true, array: true })
  answers: string[];

  @Column({ nullable: true })
  @Index({ fulltext: true })
  note: string;

  @Column({ nullable: true, name: 'member_id' })
  @Index()
  memberId: number;

  @Column({ nullable: true, name: 'form_id' })
  formId: number;

  @ManyToOne(() => Member, { createForeignKeyConstraints: false })
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @ManyToOne(() => Survey)
  @JoinColumn({ name: 'survey_id' })
  survey: Survey;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  static createFromDto(createDto: Partial<SurveyFeedback>): SurveyFeedback {
    const surveyFeedback = new SurveyFeedback();
    Object.assign(surveyFeedback, createDto);
    return surveyFeedback;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      answers: this.answers,
      note: this.note,
      memberId: this.memberId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
