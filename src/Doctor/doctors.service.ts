import { Injectable } from '@nestjs/common';
import { Doctor } from './doctor.entity';
import { IncompleteDoctorDto } from './dto/incomplete-doctor.dto';
import { Clinic } from '../Clinic/clinic.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDcotorDto } from './dto/DoctorDTO';
import { Record } from '../Record/record.entity';

@Injectable()
export class DoctorsServise {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Clinic)
    private readonly clinicRepository: Repository<Clinic>,
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
  ) {}
  //CRUD.
  async findOne(office: number): Promise<Doctor> {
    return await this.doctorRepository.findOne({
      where: { office },
      relations: {
        clinicid: true,
        recordingid: true,
      },
    });
  }
  async create(doctorDTO: CreateDcotorDto): Promise<Doctor> {
    const doctor = await this.doctorRepository.create();
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
    const recordingid = await this.recordRepository.findBy({
      recordingid: In(doctorDTO.recordingid),
    });
    doctor.recordingid = recordingid;
    await this.doctorRepository.save(doctor);
    return doctor;
  }
  async findAll(): Promise<Doctor[]> {
    const doctors = await this.doctorRepository.find({
      relations: {
        clinicid: true,
        recordingid: true,
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
  async update(id: number, updateDoctor: Doctor) {
    const doctor = await this.doctorRepository.findOne({ where: { id } });
    doctor.fullname = updateDoctor.fullname;
    doctor.age = updateDoctor.age;
    doctor.post = updateDoctor.post;
    doctor.experience = updateDoctor.experience;
    doctor.office = updateDoctor.office;
    doctor.info = updateDoctor.info;
    doctor.clinicid = updateDoctor.clinicid;
    doctor.recordingid = updateDoctor.recordingid;
    await this.doctorRepository.save(doctor);
    return doctor;
  }
  //Удаление данных врача
  async remove(id: number) {
    await this.doctorRepository.delete({ id });
  }
}
