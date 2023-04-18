import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from '../Datasource /datasource.service';
import { Clinic } from './clinic.entiti';

@Injectable()
export class ClinisServise {
  constructor(private readonly datasourceService: DatasourceService) {}
  //CRUD.
  // добавление клиники в бд.
  create(clinic: Clinic) {
    this.datasourceService.getClinics().push(clinic);
    return clinic;
  }
  //поиск клиники по адресу.
  findOne(FullAddress: string) {
    return this.datasourceService
      .getClinics()
      .find((clinic) => clinic.FullAddress === FullAddress);
  }
  //возвращает всех поликлиник.
  findAll(): Clinic[] {
    return this.datasourceService.getClinics();
  }
  //изменение данных клиники.
  update(id: number, updateClinic: Clinic) {
    const index = this.datasourceService
      .getClinics()
      .findIndex((clinic) => clinic.id === id);
    this.datasourceService.getClinics()[index] = updateClinic;
    return this.datasourceService.getClinics()[index];
  }
  //Удаление данных клиники
  remove(id: number) {
    const index = this.datasourceService
      .getClinics()
      .findIndex((clinic) => clinic.id === id);
    this.datasourceService.getClinics().splice(index, 1);
    return HttpStatus.OK;
  }
}
