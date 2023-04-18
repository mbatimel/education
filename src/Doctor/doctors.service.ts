import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from '../Datasource /datasource.service';
import { Doctor } from './doctor.entity';

@Injectable()
export class DoctorsServise {
  constructor(private readonly datasourceService: DatasourceService) {}
  //CRUD.
  // добавление врача в бд.
  create(doctor: Doctor) {
    this.datasourceService.getDoctors().push(doctor);
    return doctor;
  }
  //поиск врача по номеру кабинета.
  findOne(office: number) {
    return this.datasourceService
      .getDoctors()
      .find((doctor) => doctor.office === office);
  }
  //возвращает всех врачей.
  findAll(): Doctor[] {
    return this.datasourceService.getDoctors();
  }
  //изменение данных врача.
  update(id: number, updateDuctor: Doctor) {
    const index = this.datasourceService
      .getDoctors()
      .findIndex((doctor) => doctor.id === id);
    this.datasourceService.getDoctors()[index] = updateDuctor;
    return this.datasourceService.getDoctors()[index];
  }
  //Удаление данных врача
  remove(id: number) {
    const index = this.datasourceService
      .getDoctors()
      .findIndex((doctor) => doctor.id === id);
    this.datasourceService.getDoctors().splice(index, 1);
    return HttpStatus.OK;
  }
}
