import { Module } from '@nestjs/common';
import { ClientsServise } from './client.service';
import { ClientsController } from './client.controller';
import { DatasourceModule } from '../Datasource /datasource.module';
import { Client } from './client.entiti';
import { Doctor } from '../Doctor/doctor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ClientsController],
  providers: [ClientsServise],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Doctor, Client])],
})
export class ClientsModel {}
