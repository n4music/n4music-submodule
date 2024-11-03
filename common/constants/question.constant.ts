export enum STATUS {
  INACTIVE = -1,
  ACTIVE = 1,
}

const STATUS_DESCRIPTION = {
  [STATUS.INACTIVE]: 'Ngừng hoạt động',
  [STATUS.ACTIVE]: 'Đang hoạt động',
};

export enum TYPE {
  CHOICE = 1,
  Q_ARRAY = 2,
  Q_AND_A = 3,
}

export const TYPE_DESCRIPTION = {
  [TYPE.CHOICE]: 'Câu hỏi chỉ được chọn 1 đáp án',
  [TYPE.Q_ARRAY]: 'Câu hỏi dạng mảng',
  [TYPE.Q_AND_A]: 'Câu hỏi tự luận, feedback',
};

export const Question = {
  STATUS: STATUS,
  STATUS_DESCRIPTION: STATUS_DESCRIPTION,
  TYPE: TYPE,
  TYPE_DESCRIPTION: TYPE_DESCRIPTION,
};
