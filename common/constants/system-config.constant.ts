export enum TYPE {
  SYSTEM_INFORMATION = 1,
}
const TYPE_DESCRIPTION = {
  [TYPE.SYSTEM_INFORMATION]: 'Quản lý thông tin hệ thống',
};
export enum STATUS {
  ACTIVE = 1,
  INACTIVE = -1,
}
const STATUS_DESCRIPTION = {
  [STATUS.ACTIVE]: 'Hoạt đông',
  [STATUS.INACTIVE]: 'Ngưng hoạt động',
};
export enum SWITCH {
  ON = 1,
  OFF = -1,
}
export const SystemConfig = {
  STATUS,
  TYPE_DESCRIPTION,
  TYPE,
  STATUS_DESCRIPTION,
  SWITCH,
};
