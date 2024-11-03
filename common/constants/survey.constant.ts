export enum STATUS {
  NEW = 0,
  INACTIVE = -1,
  ACTIVE = 1,
}

const STATUS_DESCRIPTION = {
  [STATUS.NEW]: 'Mới tạo',
  [STATUS.INACTIVE]: 'Tạm dừng',
  [STATUS.ACTIVE]: 'Đang hoạt động',
};

export enum TYPE_GIFT {}
const TYPE_GIFT_DESCRIPTION: { [key: number]: string } = {};

export enum TYPE {
  DEFAULT = 1,
}

export const TYPE_DESCRIPTION = {
  [TYPE.DEFAULT]: 'Mặc định',
};

export const Survey = {
  STATUS: STATUS,
  STATUS_DESCRIPTION: STATUS_DESCRIPTION,
  TYPE: TYPE,
  TYPE_DESCRIPTION: TYPE_DESCRIPTION,
  TYPE_GIFT: TYPE_GIFT,
  TYPE_GIFT_DESCRIPTION: TYPE_GIFT_DESCRIPTION,
};
