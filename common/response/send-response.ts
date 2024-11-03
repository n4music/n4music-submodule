import { Res } from '@nestjs/common';
import { Buffer } from 'exceljs';
import { Response } from 'express';

export class SendResponse {
  static success<T>(
    @Res() res: Response,
    data: T,
    msg = 'Success!',
    code: 200 | 201 | 204,
  ) {
    return res.status(code).json({
      code,
      success: true,
      data: data,
      msg: msg,
    });
  }

  static downloadExcel(name: string, fileBuffer: Buffer, response: Response) {
    const file = Buffer.from(fileBuffer);
    response.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    response.setHeader(
      'Content-Disposition',
      `attachment; filename=${name}.xlsx`,
    );
    return response.send(file);
  }
}
