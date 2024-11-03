import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import { Member, User } from '../../entities';
import { QueryRunner, Repository } from 'typeorm';
import { DataLog } from '../entity/custom-base.entity';

@Injectable()
export class RenderLogBuilder<EntityLog extends DataLog> {
  private user: User | Member;
  private logs: Partial<EntityLog>[] = [];
  private dataLogRepository: Repository<EntityLog>;
  constructor(dataLogRepository: Repository<EntityLog>, user: User | Member) {
    this.dataLogRepository = dataLogRepository;
    this.user = user;
  }
  public addLog(column: string, oldData: any, newData: any, reason?: string) {
    const log: Partial<EntityLog> = {
      column: column,
      oldData: oldData,
      newData: newData,
      reason: reason,
    } as Partial<EntityLog>;
    this.logs.push(log);
    return this;
  }
  public async insert(objectId: number, queryRunner?: QueryRunner) {
    if (this.logs.length) {
      const dataInsert = this.logs.map((log) => {
        log.objectId = objectId;
        return log;
      });
      await this.dataLogRepository
        .createQueryBuilder('dataLog', queryRunner)
        .insert()
        .values(dataInsert as any)
        .execute();
    }
  }
}
export class UpdateBuilder<T, EntityLog extends DataLog> {
  public dataUpdate: Partial<T> = {};
  private newData: Partial<T>;
  private oldData: T;
  public renderLogBuilder: RenderLogBuilder<EntityLog>;

  constructor(
    oldData: T,
    newData: Partial<T>,
    renderLogBuilder?: RenderLogBuilder<EntityLog>,
  ) {
    this.oldData = oldData;
    this.newData = newData;
    this.renderLogBuilder = renderLogBuilder;
  }
  update(
    nameColumn: keyof T,
    options: { logging: boolean } = { logging: true },
  ): this {
    if (
      this.newData[nameColumn] !== undefined &&
      !_.isEqual(this.newData[nameColumn], this.oldData[nameColumn])
    ) {
      this.dataUpdate[nameColumn] = this.newData[nameColumn];
      if (options.logging && this.renderLogBuilder) {
        this.renderLogBuilder.addLog(
          String(nameColumn),
          this.oldData[nameColumn],
          this.newData[nameColumn],
        );
      }
    }

    return this;
  }
  updateJsonb(
    nameColumn: keyof T,
    options: { logging: boolean } = { logging: true },
  ): this {
    if (
      !this.dataUpdate[nameColumn] &&
      this.newData[nameColumn] &&
      Object.keys(this.newData[nameColumn]).length
    ) {
      const value = {
        ...this.oldData[nameColumn],
        ...this.newData[nameColumn],
      };

      this.dataUpdate[nameColumn] = value;
    }
    if (options.logging && this.renderLogBuilder) {
      this.renderLogBuilder.addLog(
        String(nameColumn),
        this.oldData[nameColumn],
        {
          ...this.oldData[nameColumn],
          ...this.newData[nameColumn],
        },
      );
    }
    return this;
  }
  updateWithValue(
    nameColumn: keyof T,
    value: T[keyof T],
    options: { logging: boolean } = { logging: true },
  ): this {
    if (value !== undefined && value !== this.oldData[nameColumn]) {
      this.dataUpdate[nameColumn] = value;
      if (options.logging && this.renderLogBuilder) {
        this.renderLogBuilder.addLog(
          String(nameColumn),
          this.oldData[nameColumn],
          value,
        );
      }
    }

    return this;
  }
}
