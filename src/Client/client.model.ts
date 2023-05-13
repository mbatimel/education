import { Module } from '@nestjs/common';
import { ClientsServise } from './client.service';
import { ClientsController } from './client.controller';
import { DatasourceModule } from '../Datasource /datasource.module';
import { Client } from './client.entity';
import { Doctor } from '../Doctor/doctor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from 'src/Record/record.entity';

@Module({
  controllers: [ClientsController],
  providers: [ClientsServise],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Doctor, Client, Record]),
  ],
})
export class ClientsModel {}
