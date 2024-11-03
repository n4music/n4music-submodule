import { Column, Entity, Index, OneToMany } from 'typeorm';
import Enum from '../common/constants';
import { CustomBaseEntity } from '../common/entity/custom-base.entity';
import { DeliveryInfoType, ImagesType } from '../common/types/type';
import { ActivedWarranty } from './actived-warranty.entity';
import { Form } from './form.entity';
import { Voucher } from './voucher.entity';

@Entity({ name: 'members' })
export class Member extends CustomBaseEntity {
  @Column({ nullable: true })
  @Index({ fulltext: true })
  name: string;

  // @Column({ nullable: true, name: 'guardian_name' })
  // guardianName: string;

  @Column({ nullable: true, unique: true })
  @Index()
  phone: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ nullable: true })
  address: string;

  // @Column({ nullable: true })
  // cmnd: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  gender: number;

  @Column({ nullable: true, name: 'city_id' })
  cityId: number;

  @Column({ nullable: true, type: 'date' })
  birthday: Date;

  @Column({
    nullable: true,
    default: Enum.Member.STATUS.ACTIVE,
  })
  status: number;

  @Column({
    nullable: true,
    default: Enum.Member.TYPE.DEFAULT,
  })
  type: number;

  @Column({
    nullable: true,
    name: 'avatar_id',
  })
  avatarId: string;

  @Column({
    nullable: true,
    type: 'jsonb',
    default: {},
  })
  images: Pick<ImagesType, 'avatar'>;

  @Column({
    name: 'token_info',
    nullable: true,
    type: 'jsonb',
    default: { app: '-' },
    select: false,
  })
  tokenInfo: { app: string };

  // @Column({ nullable: true, unique: true })
  // @Index()
  // referral_code: string;

  @Column({
    name: 'delivery_info',
    nullable: true,
    type: 'jsonb',
    default: {},
  })
  deliveryInfo: Partial<DeliveryInfoType>;

  @OneToMany(() => Voucher, (voucher) => voucher.member)
  vouchers: Voucher[];

  @OneToMany(() => ActivedWarranty, (activedWarranty) => activedWarranty.member)
  activedWarranties: ActivedWarranty[];

  @OneToMany(() => Form, (form) => form.member)
  forms: Form[];

  static createFromDto(createDto: Partial<Member>): Member {
    const user = new Member();
    Object.assign(user, createDto);
    return user;
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      name: this.name,
      phone: this.phone,
      address: this.address,
      email: this.email,
      gender: this.gender,
      cityId: this.cityId,
      birthday: this.birthday,
      status: this.status,
      type: this.type,
      avatarId: this.avatarId,
      images: this.images,
      deliveryInfo: this.deliveryInfo,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
