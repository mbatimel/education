import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from '../Datasource /datasource.service';
import { Client } from './client.entiti';

@Injectable()
export class ClientsServise {
  constructor(private readonly datasourceService: DatasourceService) {}
  //CRUD.
  // добавление записи клиета к врасу.
  create(client: Client) {
    this.datasourceService.getClients().push(client);
    return client;
  }
  //поиск запись по дате.
  findOne(dateofrecording: Date) {
    return this.datasourceService
      .getClients()
      .find((client) => client.dateofrecording === dateofrecording);
  }
  //возвращает все записи клиентов
  findAll(): Client[] {
    return this.datasourceService.getClients();
  }
  //изменение данных записи.
  update(id: number, updateClient: Client) {
    const index = this.datasourceService
      .getClients()
      .findIndex((client) => client.id === id);
    this.datasourceService.getClients()[index] = updateClient;
    return this.datasourceService.getClients()[index];
  }
  //Удаление записи к врачу
  remove(id: number) {
    const index = this.datasourceService
      .getClients()
      .findIndex((client) => client.id === id);
    this.datasourceService.getClients().splice(index, 1);
    return HttpStatus.OK;
  }
}
