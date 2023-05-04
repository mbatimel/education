import { ApiProperty } from '@nestjs/swagger';
import { Client } from 'src/Client/client.entiti';
import { Doctor } from 'src/Doctor/doctor.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('records')
export class Record {
  @PrimaryGeneratedColumn()
  recordingid: number;
  @Column()
  dateofrecording: Date;
  @Column()
  timeofrecording: Date;
  @ManyToOne(() => Doctor, (doctor) => doctor.recordingid)
  @JoinTable({
    name: 'doctor_id',
    joinColumn: { name: 'record_id' },
    inverseJoinColumn: { name: 'doctor_id' },
  })
  doctorid: Doctor;
  @ManyToOne(() => Client, (client) => client.recordingid)
  @JoinTable({
    name: 'client_id',
    joinColumn: { name: 'record_id' },
    inverseJoinColumn: { name: 'client_id' },
  })
  clientid: Client;
}
// переписать доктора потому что в круд запросах у него выскочила ошибка во время изменении данных
// имею в виду во время дополнения обьекта записb.
