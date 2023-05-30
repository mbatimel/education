import { ApiProperty } from '@nestjs/swagger';
import { Clinic } from '../Clinic/clinic.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Record } from 'src/Record/record.entity';
@Entity('doctors') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Doctor {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  @Column()
  fullname: string;
  @ApiProperty({ example: '1', description: 'Возраст' })
  @Column()
  age: number;
  @ApiProperty({ example: 'Педиатор', description: 'Направление в медецине' })
  @Column()
  post: string;
  @Column()
  @ApiProperty({ example: '20', description: 'Опыт работы' })
  experience: number;
  @Column({}) //колонка таблицы, сюда можно.
  @ApiProperty({ example: '222', description: 'Кабинет врача' })
  office: number;
  @Column()
  @ApiProperty({ example: 'хороший врач', description: 'Информация о враче' })
  info: string;
  @ManyToMany(() => Clinic, (clinic) => clinic.docotorid)
  @JoinTable({
    name: 'doctor_clinic',
    joinColumn: { name: 'doctor_id' },
    inverseJoinColumn: { name: 'clinic_id' },
  })
  clinicid: Clinic[];
  @OneToMany(() => Record, (record) => record.doctorid)
  recordingid: Record[];
  roles: string[];
}
