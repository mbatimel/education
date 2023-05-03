import { ApiProperty } from '@nestjs/swagger';
import { Clinic } from '../Clinic/clinic.entiti';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('doctors') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Doctor {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  @Column()
  fullname: string; //объект, в котором будем автоматически получать все статьи клиента
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
  // добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  office: number;
  @Column()
  info: string;
  @ManyToMany(() => Clinic, (clinic) => clinic.id)
  @JoinTable({
    name: 'doctor_clinic',
    joinColumn: { name: 'doctor_id' },
    inverseJoinColumn: { name: 'clinic_id' },
  })
  clinicid: Clinic[];
}
