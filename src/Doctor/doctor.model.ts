import { Module } from '@nestjs/common';
import { DoctorsServise } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { DatasourceModule } from 'src/Datasource /datasource.module';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsServise],
  imports: [DatasourceModule],
})
export class DoctorModel {}
