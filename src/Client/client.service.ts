import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from '../Datasource /datasource.service';
import { Client } from './client.entiti';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from '../Doctor/doctor.entity';
import { Clinic } from '../Clinic/clinic.entiti';

@Injectable()
export class ClientsServise {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Clinic)
    private readonly clinicRepository: Repository<Clinic>,
  ) {}
  //CRUD.
  // добавление записи клиета к врасу.
  // create(client: Client) {
  //   this.datasourceService.getClients().push(client);
  //   return client;
  // }
  // //поиск запись по дате.
  // findOne(dateofrecording: Date) {
  //   return this.datasourceService
  //     .getClients()
  //     .find((client) => client.dateofrecording === dateofrecording);
  // }
  // //возвращает все записи клиентов
  // findAll(): Client[] {
  //   return this.datasourceService.getClients();
  // }
  // //изменение данных записи.
  // update(id: number, updateClient: Client) {
  //   const index = this.datasourceService
  //     .getClients()
  //     .findIndex((client) => client.id === id);
  //   this.datasourceService.getClients()[index] = updateClient;
  //   return this.datasourceService.getClients()[index];
  // }
  // //Удаление записи к врачу
  // remove(id: number) {
  //   const index = this.datasourceService
  //     .getClients()
  //     .findIndex((client) => client.id === id);
  //   this.datasourceService.getClients().splice(index, 1);
  //   return HttpStatus.OK;
  // }
}
