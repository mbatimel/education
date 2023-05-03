import { Injectable } from '@nestjs/common';
import { Doctor } from '../Doctor/doctor.entity';
import { Clinic } from '../Clinic/clinic.entiti';
import { Client } from '../Client/client.entiti';
import { IncompleteDoctorDto } from '../Doctor/dto/incomplete-doctor.dto';

@Injectable()
export class DatasourceService {
  private doctor: Doctor[] = [];
  private clinic: Clinic[] = [];
  private client: Client[] = [];
  private indoctor: IncompleteDoctorDto[] = [];

  getDoctors(): Doctor[] {
    return this.doctor;
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
