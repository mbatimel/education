import { ApiProperty } from '@nestjs/swagger';
import { Doctor } from 'src/Doctor/doctor.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('clinic')
export class Clinic {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    example: 'г.Пушкино, ул. Колотушкино, д.2а',
    description: 'Адрес',
  })
  @Column({})
  FullAddress: string;
  @ApiProperty({ example: '5', description: 'Рейтинг' })
  @Column()
  Rating: number;
  @ApiProperty({
    example: '89150212165',
    description: 'Номертелефона приемной поликлиники',
  })
  @Column({})
  phone: string;
  @ApiProperty({
    example: 'Иванов Иван Иванович',
    description: 'ФИО главврача',
  })
  @Column()
  HeadOf: string;
  @ManyToMany(() => Doctor, (doctor) => doctor.clinicid)
  @JoinTable({
    name: 'doctor_clinic',
    joinColumn: { name: 'clinic_id' },
    inverseJoinColumn: { name: 'docotor_id' },
  })
  docotorid: Doctor[];
}
