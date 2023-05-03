import { Doctor } from '../Doctor/doctor.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('clinic')
export class Clinic {
  @PrimaryGeneratedColumn()
  @ManyToMany(() => Doctor, (doctor) => doctor.id)
  @JoinTable({
    name: 'doctor_clinic',
    joinColumn: { name: 'clinic_id' },
    inverseJoinColumn: { name: 'doctor_id' },
  })
  id: number;
  @Column({})
  FullAddress: string;
  @Column()
  Rating: number;
  @Column({})
  phone: string;
  @Column()
  HeadOf: string;
}
