import { Client } from 'src/Client/client.entity';
import { Doctor } from 'src/Doctor/doctor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('records')
export class Record {
  @PrimaryGeneratedColumn()
  recordingid: number;
  @Column()
  dateofrecording: Date;
  @Column()
  timeofrecording: Date;
  @ManyToOne(() => Doctor, (doctor) => doctor.recordingid)
  doctorid: Doctor[];
  @ManyToOne(() => Client, (client) => client.recordingid)
  clientid: Client[];
  roles: string[];
}
