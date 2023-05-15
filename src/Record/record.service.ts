import { Injectable } from '@nestjs/common';
import { Record } from 'src/Record/record.entity';
import { Client } from '../Client/client.entity';
import { Doctor } from '../Doctor/doctor.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRecordDto } from './dto/RecordDTO';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
  ) {}
  //CRUD.
  findOne(recordingid: number): Promise<Record> {
    return this.recordRepository.findOne({
      where: { recordingid },
      relations: {
        clientid: true,
        doctorid: true,
      },
    });
  }
  async create(recordDTO: CreateRecordDto): Promise<Record> {
    const records = this.recordRepository.create();
    records.dateofrecording = recordDTO.dateofrecording;
    records.timeofrecording = recordDTO.timeofrecording;
    const doctorid = await this.doctorRepository.findBy({
      id: In(recordDTO.doctorid),
    });
    records.doctorid = doctorid;
    const clientid = await this.clientRepository.findBy({
      id: In(recordDTO.clientid),
    });
    records.clientid = clientid;
    this.recordRepository.create(records);
    return records;
  }
  async findAll(): Promise<Record[]> {
    const record = await this.recordRepository.find({
      relations: {
        clientid: true,
        doctorid: true,
      },
    });
    return record;
  }
  async update(recordingid: number, updateRecord: Record) {
    const record = await this.recordRepository.findOne({
      where: { recordingid },
    });
    record.recordingid = updateRecord.recordingid;
    record.dateofrecording = updateRecord.dateofrecording;
    record.timeofrecording = updateRecord.timeofrecording;
    record.doctorid = updateRecord.doctorid;
    record.clientid = updateRecord.clientid;
    await this.recordRepository.save(record);
    return record;
  }
  //Удаление данных врача
  async remove(recordingid: number) {
    this.recordRepository.delete({ recordingid });
  }
}
