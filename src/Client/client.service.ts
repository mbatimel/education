import { Injectable } from '@nestjs/common';
import { Client } from './client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Doctor } from '../Doctor/doctor.entity';
import { Record } from 'src/Record/record.entity';
import { CreateClientDTO } from './dto/ClientDTO';

@Injectable()
export class ClientsServise {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
  ) {}
  //CRUD.
  findOne(id: number): Promise<Client> {
    return this.clientRepository.findOne({
      where: { id },
      relations: {
        recordingid: true,
      },
    });
  }
  async create(clientDTO: CreateClientDTO): Promise<Client> {
    const client = await this.clientRepository.create();
    client.Fullname = clientDTO.Fullname;
    client.Birthday = clientDTO.Birthday;
    client.age = clientDTO.age;
    client.phone = clientDTO.phone;
    client.gender = clientDTO.gender;
    client.address = clientDTO.address;
    client.workORstudy = clientDTO.workORstudy;
    const recordingid = await this.recordRepository.findBy({
      recordingid: In(clientDTO.recordingid),
    });
    client.recordingid = recordingid;
    await this.doctorRepository.save(client);
    return client;
  }
  async findAll(): Promise<Client[]> {
    const clients = await this.clientRepository.find({
      relations: {
        recordingid: true,
      },
    });
    return clients;
  }
  async update(id: number, updateClients: Client) {
    const client = await this.clientRepository.findOne({ where: { id } });
    client.Fullname = updateClients.Fullname;
    client.Birthday = updateClients.Birthday;
    client.age = updateClients.age;
    client.phone = updateClients.phone;
    client.gender = updateClients.gender;
    client.address = updateClients.address;
    client.workORstudy = updateClients.workORstudy;
    client.recordingid = updateClients.recordingid;
    await this.clientRepository.save(client);
    return client;
  }
  //Удаление данных врача
  async remove(id: number) {
    this.clientRepository.delete({ id });
  }
}
