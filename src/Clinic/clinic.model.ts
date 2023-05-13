import { Module } from '@nestjs/common';
import { ClinisServise } from './clinic.service';
import { ClinicsController } from './clinic.controller';
import { DatasourceModule } from '../Datasource /datasource.module';
import { Doctor } from '../Doctor/doctor.entity';
import { Clinic } from './clinic.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ClinicsController],
  providers: [ClinisServise],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Doctor, Clinic])],
})
export class ClinicModel {}
