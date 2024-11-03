import { Injectable } from '@nestjs/common';
import { DataSource, QueryRunner } from 'typeorm';

@Injectable()
export class TransactionBuilder {
  private processes: Promise<any>[] = [];
  private dataSource: DataSource;
  public queryRunner: QueryRunner;
  constructor(dataSource?: DataSource) {
    this.dataSource = dataSource;
  }
  async startTransaction() {
    this.queryRunner = this.dataSource.createQueryRunner();
    await this.queryRunner.connect();
    await this.queryRunner.startTransaction();
    return this;
  }
  async commitTransaction() {
    await this.queryRunner.commitTransaction();
    return this;
  }
  async rollbackTransaction() {
    await this.queryRunner.rollbackTransaction();
    return this;
  }
  async release() {
    await this.queryRunner.release();
    return this;
  }
  addProcess(process: Promise<any>) {
    this.processes.push(process);
    return this;
  }

  clearProcess() {
    this.processes = [];
    return this;
  }
  async runProcess() {
    const data = await Promise.all(this.processes);
    this.clearProcess();
    return data;
  }
}
