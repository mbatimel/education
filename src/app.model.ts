import { Module } from '@nestjs/common';
import { DoctorModel } from './Doctor/doctor.model';
import { DatasourceModule } from './Datasource /datasource.module';
import { ClinicModel } from './Clinic/clinic.model';
import { ClientsModel } from './Client/client.model';

@Module({
  imports: [DoctorModel, ClinicModel, ClientsModel, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
