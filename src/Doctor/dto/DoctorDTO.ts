import { ApiProperty } from '@nestjs/swagger';

export class CreateDcotor {
  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  fullname: string;
  age: number;
  @ApiProperty({ example: '20', description: 'Опыт работы' })
  experience: number;
  info: string;
  @ApiProperty({ example: 'Педиатор', description: 'Направление в медецине' })
  post: string;
  office: number;
  clinicid: number[];
  recordingid: number[];
}
