import { Record } from 'src/Record/record.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  @OneToMany(() => Record, (record) => record.clientid)
  recordingid: Record[];
  roles: string[];
}
