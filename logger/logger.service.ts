import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import moment from 'moment';
import { cfg } from '../config/env.config';
@Injectable()
export class Logger implements LoggerService {
  private readonly logger: winston.Logger;
  public logLevels = {
    levels: {
      fatal: 0,
      error: 1,
      info: 2,
      debug: 3,
      data: 4,
    },
    colors: {
      fatal: 'magenta',
      error: 'red',
      info: 'green',
      debug: 'blue',
      data: 'pink',
    },
  };
  constructor() {
    const messageFormat = winston.format.printf(
      ({ level, message, timestamp }) => {
        const purpleTimestamp = `\x1b[35m${timestamp}\x1b[0m`; // 35 là mã màu tím

        const info = JSON.parse(message);

        const messageRender = info.message.message || info.message;

        if (info.message.clientIp)
          return `${purpleTimestamp} - [${level}] - [\x1b[33m${info.message.clientIp}\x1b[0m] - ${messageRender}`;
        return `${purpleTimestamp} - [${level}] - ${messageRender}`;
      },
    );
    const timezoned = () => moment().format();

    const { combine, colorize, timestamp, splat, align } = winston.format;

    const fatalTransporter = new winston.transports.DailyRotateFile({
      level: 'fatal',
      format: combine(
        timestamp({ format: timezoned }),
        align(),
        splat(),
        messageFormat,
      ),
      filename: cfg('LOG_FATAL_PATH'),
      datePattern: cfg('LOG_NAME_DATE_PATTERN'),
    });
    const errorTransporter = new winston.transports.DailyRotateFile({
      level: 'error',
      format: combine(
        timestamp({ format: timezoned }),
        align(),
        splat(),
        messageFormat,
      ),
      maxSize: cfg('LOG_MAX_SIZE'),
      maxFiles: cfg('LOG_MAX_FILES'),
      filename: cfg('LOG_ERROR_PATH'),
      zippedArchive: cfg('LOG_ZIP_OLD_FILE'),
      datePattern: cfg('LOG_NAME_DATE_PATTERN'),
    });
    const infoTransporter = new winston.transports.DailyRotateFile({
      level: 'info',
      format: combine(
        timestamp({ format: timezoned }),
        align(),
        splat(),
        messageFormat,
      ),
      maxSize: cfg('LOG_MAX_SIZE'),
      maxFiles: cfg('LOG_MAX_FILES'),
      filename: cfg('LOG_COMBINED_PATH'),
      zippedArchive: cfg('LOG_ZIP_OLD_FILE'),
      datePattern: cfg('LOG_NAME_DATE_PATTERN'),
    });

    const consoleTransporter = new winston.transports.Console({
      level: 'debug',
      format: combine(
        colorize(this.logLevels),
        timestamp({ format: timezoned }),
        align(),
        splat(),
        messageFormat,
      ),
    });

    this.logger = winston.createLogger({
      levels: this.logLevels.levels,
      transports: [],
    });
    this.logger.add(consoleTransporter);

    this.logger.add(fatalTransporter);
    this.logger.add(errorTransporter);
    this.logger.add(infoTransporter);
  }

  log(level: 'log' | 'info' | 'warn', message: any): void {
    switch (level) {
      case 'log':
        this.info(message);
        break;
      case 'info':
        this.info(message);
        break;
      case 'warn':
        this.warn(message);
        break;
    }
  }

  error(message: any) {
    this.logger.log({
      level: 'error',
      message: JSON.stringify({
        message,
      }),
    });
  }

  warn(message: any) {
    this.logger.log({
      level: 'warn',
      message: JSON.stringify({
        message,
      }),
    });
  }

  debug(message: any) {
    this.logger.log({
      level: 'debug',
      message: JSON.stringify({
        message,
      }),
    });
  }

  verbose(message: any) {
    this.logger.log({
      level: 'verbose',
      message: JSON.stringify({
        message,
      }),
    });
  }
  info(message: any) {
    this.logger.log({
      level: 'info',
      message: JSON.stringify({
        message,
      }),
    });
  }

  logMigration(message: string): void {
    this.info(`[message] - ${message}`);
  }

  logQuery(query: string, parameters?: unknown[]): void {
    this.info(`[\x1b[34mquery\x1b[0m] - ${query}`);

    if (parameters && parameters.length) {
      this.info(
        `[\x1b[36mparameters\x1b[0m] \x1b[38;5;206m${JSON.stringify(
          parameters,
        )}\x1b[0m`,
      );
    }
  }

  logQueryError(error: string, query: string, parameters?: unknown[]): void {
    this.error(`[Error query] - ${query}`);
    if (parameters && parameters.length) {
      this.info(`[parameters] - ${JSON.stringify(parameters)}`);
    }
    this.error(`Error: ${error}`);
  }

  logQuerySlow(time: number, query: string, parameters?: unknown[]): void {
    this.warn(`[Slow query detected] - ${query}`);
    if (parameters && parameters.length) {
      this.info(`[parameters] ${JSON.stringify(parameters)}`);
    }
    this.warn(`[Execution time] - ${time}ms`);
  }

  logSchemaBuild(message: string): void {
    this.info(`[Schema build] - ${message}`);
  }
}
