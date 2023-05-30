import { Injectable } from '@nestjs/common';
import { Doctor } from '../Doctor/doctor.entity';
import { Clinic } from '../Clinic/clinic.entity';
import { Client } from '../Client/client.entity';
import { Record } from '../Record/record.entity';
import { IncompleteDoctorDto } from '../Doctor/dto/incomplete-doctor.dto';
import { User } from 'src/Users/user.entity';

@Injectable()
export class DatasourceService {
  private doctor: Doctor[] = [];
  private clinic: Clinic[] = [];
  private client: Client[] = [];
  private record: Record[] = [];
  private user: User[] = [];
  private indoctor: IncompleteDoctorDto[] = [];

  getDoctors(): Doctor[] {
    return this.doctor;
  }
  getRecords(): Record[] {
    return this.record;
  }
  getUser(): User[] {
    return this.user;
  }
  getClinics(): Clinic[] {
    return this.clinic;
  }
  getClients(): Client[] {
    return this.client;
  }
  getIncoplitdoctors(): IncompleteDoctorDto[] {
    return this.indoctor;
  }
}
