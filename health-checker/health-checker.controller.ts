import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ErrorHttpException } from '../common/exceptions/throw.exception';
import Enum from '../common/constants';
import { Public } from '../common/decorators/public.decorator';
import { cfg } from '../config/env.config';

@ApiTags('HealthChecker')
@Controller('')
export class HealthCheckerController {
  @Public()
  @Get('v1/enums')
  async enum() {
    if (cfg('NODE_ENV') === 'production') {
      throw ErrorHttpException(HttpStatus.FORBIDDEN, 'FORBIDDEN');
    }
    return Enum;
  }
  @Public()
  @Get('v1/health-checker')
  async check() {
    return process.env.npm_package_version;
  }

  @Public()
  @Get('')
  async data() {
    return process.env.npm_package_version;
  }
}
