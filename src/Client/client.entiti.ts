import { Doctor } from '../Doctor/doctor.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Fullname: string;
  @Column()
  Birthday: Date;
  @Column()
  age: number;
  @Column()
  phone: string;
  @Column()
  gender: string;
  @Column()
  address: string;
  @Column()
  workORstudy: string;
  @Column()
  dateofrecording: Date;
  @Column()
  timeofrecording: Date;
  @ManyToMany(() => Doctor, (doctor) => doctor.fullname)
  @JoinTable({
    name: 'doctor_fullname',
    joinColumn: { name: 'client_id' },
    inverseJoinColumn: { name: 'doctor_id' },
  })
  doctor: Doctor[];
}
