import { Injectable } from '@nestjs/common';
import { Doctor } from './doctor.entity';
import { IncompleteDoctorDto } from './dto/incomplete-doctor.dto';
import { Client } from '../Client/client.entiti';
import { Clinic } from '../Clinic/clinic.entiti';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDcotorDto } from './dto/DoctorDTO';

@Injectable()
export class DoctorsServise {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Clinic)
    private readonly clinicRepository: Repository<Clinic>,
  ) {}
  //CRUD.
  findOne(office: number): Promise<Doctor> {
    return this.doctorRepository.findOne({
      where: { office },
      relations: {
        clinicid: true,
      },
    });
  }
  async create(doctorDTO: CreateDcotorDto): Promise<Doctor> {
    const doctor = this.doctorRepository.create();
    doctor.fullname = doctorDTO.fullname;
    doctor.age = doctorDTO.age;
    doctor.info = doctorDTO.info;
    doctor.post = doctorDTO.post;
    doctor.experience = doctorDTO.experience;
    doctor.office = doctorDTO.office;
    const clinicid = await this.clinicRepository.findBy({
      id: In(doctorDTO.clinicid),
    });
    doctor.clinicid = clinicid;
    await this.doctorRepository.save(doctor);
    return doctor;
  }
  async findAll(): Promise<Doctor[]> {
    const doctors = await this.doctorRepository.find({
      relations: {
        clinicid: true,
      },
    });
    return doctors;
  }
  async findIncomplete(): Promise<IncompleteDoctorDto[]> {
    const doctors = await this.doctorRepository.find();
    const incomplitedoctors: IncompleteDoctorDto[] = doctors.map((doctor) => {
      const incomplite = new IncompleteDoctorDto();
      incomplite.id = doctor.id;
      incomplite.fullName = doctor.fullname;
      incomplite.office = doctor.office;
      return incomplite;
    });
    return incomplitedoctors;
  }
  async update(id: number, updateDuctor: Doctor) {
    const doctor = await this.doctorRepository.findOne({ where: { id } });
    doctor.fullname = updateDuctor.fullname;
    doctor.age = updateDuctor.age;
    doctor.post = updateDuctor.post;
    doctor.experience = updateDuctor.experience;
    doctor.office = updateDuctor.office;
    doctor.info = updateDuctor.info;
    doctor.clinicid = updateDuctor.clinicid;
    await this.doctorRepository.save(doctor);
    return doctor;
  }
  //Удаление данных врача
  async remove(id: number) {
    this.doctorRepository.delete({ id });
  }
}
