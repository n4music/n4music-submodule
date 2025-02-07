import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Logger } from '../logger/logger.service';
import { cfg } from './env.config';

export const dataSourceOptions: DataSourceOptions = {
  type: cfg('DB_DRIVER'),
  host: cfg('DB_HOST'),
  port: cfg('DB_PORT', Number),
  username: cfg('DB_USERNAME'),
  password: cfg('DB_PASSWORD'),
  database: cfg('DB_NAME'),
  logging: true,
  logger: new Logger(),
  synchronize: false,
  migrationsRun: false,
  entities: [join(__dirname, '..', '/database/entities/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '..', '/database/migrations/*.{js,ts}')],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
