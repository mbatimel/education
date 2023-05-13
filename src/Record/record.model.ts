import { Module } from '@nestjs/common';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../Client/client.entity';
import { Doctor } from '../Doctor/doctor.entity';
import { DatasourceModule } from 'src/Datasource /datasource.module';
import { Record } from './record.entity';

@Module({
  controllers: [RecordController],
  providers: [RecordService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Doctor, Client, Record]),
  ],
})
export class RecordModel {}
