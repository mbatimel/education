import { Module } from '@nestjs/common';
import { DoctorModel } from './Doctor/doctor.model';
import { DatasourceModule } from './Datasource /datasource.module';
import { ClinicModel } from './Clinic/clinic.model';
import { ClientsModel } from './Client/client.model';
import { RecordModel } from './Record/record.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from './auth/local-auth.guard';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './Guard/user.model';

@Module({
  imports: [
    DoctorModel,
    AuthModule,
    UserModule,
    ClinicModel,
    ClientsModel,
    RecordModel,
    DatasourceModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //тип подключаемой БД
      port: 5432, //порт
      username: 'postgres', //имя пользователя
      password: 'tatarin17', //пароль
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
      entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),
  ],
  controllers: [],
  providers: [JwtAuthGuard],
})
export class AppModule {}
