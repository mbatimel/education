import { Module } from '@nestjs/common';
import { DoctorsServise } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { DatasourceModule } from '../Datasource /datasource.module';
import { Clinic } from '../Clinic/clinic.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../Client/client.entity';
import { Doctor } from './doctor.entity';
import { Record } from '../Record/record.entity';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsServise],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Doctor, Client, Clinic, Record]),
  ],
})
export class DoctorModel {}
