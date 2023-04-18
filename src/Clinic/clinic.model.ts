import { Module } from '@nestjs/common';
import { ClinisServise } from './clinic.service';
import { ClinicsController } from './clinic.controller';
import { DatasourceModule } from 'src/Datasource /datasource.module';

@Module({
  controllers: [ClinicsController],
  providers: [ClinisServise],
  imports: [DatasourceModule],
})
export class ClinicModel {}
