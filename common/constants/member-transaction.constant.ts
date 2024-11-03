export enum TYPE {
  SCAN_CODE = 1,
  TRADE = 2,
  SPIN = 3,
  INSERT_EVENT_CODE = 4,
  REFERRAL = 5,
  SURVEY = 6,
  ACTIVE_WARRANTY = 7,
}
const TYPE_DESCRIPTION: { [key: number]: string } = {
  [TYPE.SCAN_CODE]: 'Nhập mã',
  [TYPE.TRADE]: 'Đổi quà',
  [TYPE.SPIN]: 'Vòng quay',
  [TYPE.SURVEY]: 'Khảo sát',
  [TYPE.ACTIVE_WARRANTY]: 'Kích hoạt bảo hành',
};

export const MemberTransaction = {
  TYPE,
  TYPE_DESCRIPTION,
};
