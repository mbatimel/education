import { Injectable } from '@nestjs/common';
import { Doctor } from 'src/Doctor/doctor.entity';
import { Clinic } from 'src/Clinic/clinic.entiti';
import { Client } from 'src/Client/client.entiti';

@Injectable()
export class DatasourceService {
  private doctor: Doctor[] = [];
  private clinic: Clinic[] = [];
  private client: Client[] = [];

  getDoctors(): Doctor[] {
    return this.doctor;
  }
  getClinics(): Clinic[] {
    return this.clinic;
  }
  getClients(): Client[] {
    return this.client;
  }
}
