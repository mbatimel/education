import { ApiProperty } from '@nestjs/swagger';
import { Client } from 'src/Client/client.entity';
import { Doctor } from 'src/Doctor/doctor.entity';
export class CreateRecordDto {
  @ApiProperty({ example: '2003-03-10', description: 'Дата записи' })
  dateofrecording: Date;
  @ApiProperty({ example: '10:10:0000', description: 'Вермя записи' })
  timeofrecording: Date;
  doctorid: Doctor[];
  clientid: Client[];
}
