import { Injectable } from '@nestjs/common';
import { Clinic } from './clinic.entiti';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from '../Doctor/doctor.entity';
import { Client } from '../Client/client.entiti';
import { CreateClinicDTO } from './dto/ClinicDTO';

@Injectable()
export class ClinisServise {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Clinic)
    private readonly clinicRepository: Repository<Clinic>,
  ) {}
  //CRUD.
  async create(clinicDTO: CreateClinicDTO): Promise<Clinic> {
    const clinic = await this.clinicRepository.create();
    clinic.FullAddress = clinicDTO.FullAddress;
    clinic.Rating = clinicDTO.Rating;
    clinic.phone = clinicDTO.phone;
    clinic.HeadOf = clinicDTO.HeadOf;
    await this.clinicRepository.save(clinic);
    return clinic;
  }
  async findOne(FullAddress: string) {
    return this.clinicRepository.findOne({ where: { FullAddress } });
  }
  async findAll(): Promise<Clinic[]> {
    const clinics = await this.clinicRepository.find({});
    return clinics;
  }
  async update(id: number, updateClinic: Clinic) {
    const clinic = await this.clinicRepository.findOne({ where: { id } });
    clinic.FullAddress = updateClinic.FullAddress;
    clinic.HeadOf = updateClinic.HeadOf;
    clinic.Rating = updateClinic.Rating;
    clinic.phone = updateClinic.phone;
    await this.clinicRepository.save(clinic);
    return clinic;
  }
  async remove(id: number) {
    await this.clinicRepository.delete({ id });
  }
}
