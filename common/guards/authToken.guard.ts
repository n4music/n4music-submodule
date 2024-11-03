import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import moment from 'moment';
import { cfg } from '../../config/env.config';
import { Logger } from '../../logger/logger.service';
import { ErrorHttpException } from '../exceptions/throw.exception';

@Injectable()
export class AuthTokenGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private readonly logger: Logger,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      this.logger.error(`[authentication] - Not found token`);
      throw ErrorHttpException(HttpStatus.UNAUTHORIZED, 'UNAUTHORIZED');
    }
    try {
      const payload = await this.jwtService.decode(token);
      console.log(payload);

      if (!payload) {
        throw ErrorHttpException(HttpStatus.UNAUTHORIZED, 'UNAUTHORIZED');
      }
      if (payload.tid !== cfg('TENANT_ID')) {
        throw ErrorHttpException(HttpStatus.UNAUTHORIZED, 'UNAUTHORIZED');
      }
      if (payload.exp < moment().unix())
        throw ErrorHttpException(HttpStatus.UNAUTHORIZED, 'UNAUTHORIZED');

      request['user'] = payload;
    } catch (error) {
      console.log(error);

      this.logger.error(
        `[authentication] # Authentication Error # ${
          error.response?.details || error.message
        }`,
      );
      throw ErrorHttpException(HttpStatus.UNAUTHORIZED, 'UNAUTHORIZED');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
