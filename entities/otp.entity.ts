import { Column, Entity } from 'typeorm';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import Enum from '../common/constants';

@Entity({ name: 'otps' })
export class Otp extends CustomBaseEntity {
  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true, type: 'jsonb', default: {} })
  token: {
    verifyToken?: string;
    processToken?: string;
  };

  @Column({ nullable: true })
  type: number;

  @Column({ nullable: true, default: Enum.Otp.STATUS.VERIFYING })
  status: number;

  @Column({ nullable: true })
  ip: string;

  static createFromDto(data: Partial<Otp>): Otp {
    const otp = new Otp();
    otp.code = data.code;
    otp.phone = data.phone;
    otp.type = data.type;
    otp.status = data.status;
    otp.token = data.token;
    otp.ip = data.ip;
    return otp;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      phone: this.phone,
      code: this.code,
      type: this.type,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
