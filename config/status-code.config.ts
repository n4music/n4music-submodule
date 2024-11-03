export interface StatusCodeConfig {
  [key: string]: { code: number; type: string; msg: string };
}

const statusCode: StatusCodeConfig = {
  BACKEND: {
    code: 500,
    type: 'ERROR_BACKEND',
    msg: 'Hệ thông đang có vấn đề, thử lại sau!',
  },
  BAD_REQUEST: { code: 400, type: 'BAD_REQUEST', msg: 'Yêu cầu không hợp lệ!' },
  UNAUTHORIZED: {
    code: 401,
    type: 'UNAUTHORIZED',
    msg: 'Không được phép truy cập!',
  },
  FORBIDDEN: {
    code: 403,
    type: 'FORBIDDEN',
    msg: 'Bạn không có quyền truy cập!',
  },
  NOT_FOUND: { code: 404, type: 'NOT_FOUND', msg: 'Không tìm thấy!' },
  WRONG_DATA: { code: 409, type: 'WRONG_DATA', msg: 'Lỗi sai dữ liệu!' },

  //AUTH
  SERVICE_MAINTAIN: {
    code: 503,
    type: 'SERVICE_MAINTAIN',
    msg: 'Hệ thống đang bảo trì, Vui lòng thử lại sau!',
  },

  SERVICE_NOT_REALSE: {
    code: 504,
    type: 'SERVICE_NOT_REALSE',
    msg: 'Hệ thống đang không thể thực hiện được yêu cầu này!',
  },

  //OTP
  CHECK_SCAN_CODE_CONSECUTIVE: {
    code: 601,
    type: 'CHECK_SCAN_CODE_CONSECUTIVE',
    msg: 'Bạn đã check mã liên tục nhiều lần, vui lòng chờ lại sau!',
  },

  WRONG_OTP: {
    code: 602,
    type: 'WRONG_OTP',
    msg: 'Mã OTP không đúng, vui lòng thử lại!',
  },

  //PRODUCT
  PRODUCT_NOT_FOUND: {
    code: 701,
    type: 'PRODUCT_NOT_FOUND',
    msg: 'Không tìm thấy sản phẩm! Vui lòng thử lại!',
  },

  PRODUCT_MUST_NOT_IN_PARENT_CATEGORY: {
    code: 702,
    type: 'PRODUCT_MUST_NOT_IN_PARENT_CATEGORY',
    msg: 'Sản phẩm không được thuộc danh mục cha!',
  },

  //AUTH
  USER_NOT_FOUND: {
    code: 801,
    type: 'USER_NOT_FOUND',
    msg: 'Không tìm thấy người dùng!',
  },

  USER_STATUS_NOT_ACTIVE: {
    code: 802,
    type: 'USER_STATUS_NOT_ACTIVE',
    msg: 'Tài khoản của bạn chưa được kích hoạt, tạm ngưng hoạt động hoặc đã bị xóa!',
  },

  WRONG_PASSWORD: {
    code: 803,
    type: 'WRONG_PASSWORD',
    msg: 'Mật khẩu không chính xác!',
  },

  EMAIL_DUPLICATE: {
    code: 804,
    type: 'EMAIL_DUPLICATE',
    msg: 'Email đã tồn tại!',
  },

  //CAMPAIGN
  CAMPAIGN_NOT_FOUND: {
    code: 901,
    type: 'CAMPAIGN_NOT_FOUND',
    msg: 'Không tìm thấy campaign!',
  },

  //CATEGORY
  CATEGORY_NOT_FOUND: {
    code: 1001,
    type: 'CATEGORY_NOT_FOUND',
    msg: 'Không tìm thấy thể loại!',
  },

  //MEMBER
  MEMBER_NOT_FOUND: {
    code: 1100,
    type: 'MEMBER_NOT_FOUND',
    msg: 'Không tìm thấy khách hàng!',
  },
  MEMBER_NAME_NOT_VALID: {
    code: 1101,
    type: 'MEMBER_NAME_NOT_VALID',
    msg: 'Tên khách hàng không phù hợp!',
  },

  //MEDIA FILE
  MEDIA_FILE_NOT_FOUND: {
    code: 1200,
    type: 'MEDIA_FILE_NOT_FOUND',
    msg: 'Không tìm thấy file!',
  },

  //SURVEY
  SURVEY_NOT_FOUND: {
    code: 1300,
    type: 'SURVEY_NOT_FOUND',
    msg: 'Không tìm thấy khảo sát!',
  },

  //ACTIVE WARRANTY
  ACTIVE_FAIL: {
    code: 1400,
    type: 'ACTIVE_FAIL',
    msg: 'Kích hoạt thất bại!',
  },
  PRODUCT_ACTIVE_NOT_FOUND: {
    code: 1401,
    type: 'PRODUCT_ACTIVE_NOT_FOUND',
    msg: 'Không tìm thấy sản phẩm!',
  },
  PASS_ACTIVE: {
    code: 1402,
    type: 'PASS_ACTIVE',
    msg: 'Đã được kích hoạt',
  },
  FAIL_ACTIVE: {
    code: 1403,
    type: 'FAIL_ACTIVE',
    msg: 'Kích hoạt thất bại!',
  },
  ITEM_ACTIVATED: {
    code: 1404,
    type: 'ITEM_ACTIVATED',
    msg: 'Kích hoạt thành công!',
  },
  NO_PERMISSION_TO_OVERRIDE: {
    code: 1405,
    type: 'NO_PERMISSION_TO_OVERRIDE',
    msg: 'Không có quyền truy cập!',
  },
  SERIAL_MISSING: {
    code: 1406,
    type: 'SERIAL_MISSING',
    msg: 'Thiếu serial',
  },
  TYPE_MISSING: {
    code: 1407,
    type: 'TYPE_MISSING',
    msg: 'Thiếu loại',
  },
  INVALID: {
    code: 1408,
    type: 'INVALID',
    msg: 'Lỗi không hợp lệ',
  },
  DEALER_ACCOUNT_CODE_MISSING: {
    code: 1409,
    type: 'DEALER_ACCOUNT_CODE_MISSING',
    msg: 'Thiếu mã tài khoản đại lý',
  },
  DEALER_NOT_EXIST: {
    code: 1410,
    type: 'DEALER_NOT_EXIST',
    msg: 'Đại lý không tồn tại',
  },

  CUSTOMERNAME_MISSING: {
    code: 1411,
    type: 'CUSTOMERNAME_MISSING',
    msg: 'Thiếu tên khách hàng',
  },
  PHONE_NUMBER_MISSING: {
    code: 1412,
    type: 'PHONE_NUMBER_MISSING',
    msg: 'Thiếu số điện thoại',
  },
  PHONE_NUMBER_INVALID: {
    code: 1413,
    type: 'PHONE_NUMBER_INVALID',
    msg: 'Số điện thoại không hợp lệ',
  },
  EMAIL_MISSING: {
    code: 1414,
    type: 'EMAIL_MISSING',
    msg: 'Thiếu email',
  },
  INVALID_EMAIL: {
    code: 1415,
    type: 'INVALID_EMAIL',
    msg: 'Email không hợp lệ',
  },

  ADDRESS_MISSING: {
    code: 1416,
    type: 'INVALID_ADDRESS',
    msg: 'Thiếu địa chỉ',
  },
  PURCHASE_DATE_MISSING: {
    code: 1417,
    type: 'PURCHASE_DATE_MISSING',
    msg: 'Thiếu ngày mua hàng',
  },
  INVALID_DATE: {
    code: 1418,
    type: 'INVALID_DATE',
    msg: 'Định dạng ngày không hợp lệ',
  },
  IMAGE_MISSING: {
    code: 1419,
    type: 'IMAGE_MISSING',
    msg: 'Thiếu hình ảnh',
  },
  IMAGE_INVALID: {
    code: 1420,
    type: 'IMAGE_INVALID',
    msg: 'Không tìm thấy ảnh hoặc ảnh không hợp lệ',
  },
  INVALID_PRODUCT_MODEL: {
    code: 1421,
    type: 'INVALID_PRODUCT_MODEL',
    msg: 'hiếu model sản phẩm',
  },

  //MEMBER WHEEL GIFT
  MEMBER_WHEEL_GIFT_NOT_FOUND: {
    code: 1500,
    type: 'MEMBER_WHEEL_GIFT_NOT_FOUND',
    msg: 'Không tìm thấy quà của khách hàng!',
  },
  MEMBER_WHEEL_GIFT_CANNOT_CHANGE_STATUS: {
    code: 1501,
    type: 'MEMBER_WHEEL_GIFT_CANNOT_CHANGE_STATUS',
    msg: 'Quà đã hoàn thành! không được phép chỉnh sửa!',
  },
  MEMBER_WHEEL_GIFT_MISSING_DELEVERY_INFO: {
    code: 1502,
    type: 'MEMBER_WHEEL_GIFT_MISSING_DELEVERY_INFO',
    msg: 'Khách hàng cần điền thông tin nhận quà!',
  },

  //FORM
  FORM_NOT_FOUND: {
    code: 1600,
    type: 'FORM_NOT_FOUND',
    msg: 'Không tìm thấy form kích hoạt!',
  },
};
export default statusCode;
