import { Module } from '@nestjs/common';
import { DoctorsServise } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { DatasourceModule } from '../Datasource /datasource.module';
import { Clinic } from '../Clinic/clinic.entiti';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../Client/client.entiti';
import { Doctor } from './doctor.entity';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsServise],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Doctor, Client, Clinic]),
  ],
})
export class DoctorModel {}
