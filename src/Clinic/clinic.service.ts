import { Injectable } from '@nestjs/common';
import { Clinic } from './clinic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateClinicDTO } from './dto/ClinicDTO';
import { Doctor } from 'src/Doctor/doctor.entity';

@Injectable()
export class ClinisServise {
  constructor(
    @InjectRepository(Clinic)
    private readonly clinicRepository: Repository<Clinic>,
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}
  //CRUD.
  async create(clinicDTO: CreateClinicDTO): Promise<Clinic> {
    const clinic = await this.clinicRepository.create();
    clinic.FullAddress = clinicDTO.FullAddress;
    clinic.Rating = clinicDTO.Rating;
    clinic.phone = clinicDTO.phone;
    clinic.HeadOf = clinicDTO.HeadOf;
    const doctorid = await this.doctorRepository.findBy({
      id: In(clinicDTO.docotorid),
    });
    clinic.docotorid = doctorid;
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
