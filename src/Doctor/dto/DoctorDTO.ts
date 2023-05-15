import { ApiProperty } from '@nestjs/swagger';

export class CreateDcotorDto {
  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  fullname: string;
  @ApiProperty({ example: '25', description: 'возраст' })
  age: number;
  @ApiProperty({ example: '20', description: 'Опыт работы' })
  experience: number;
  @ApiProperty({
    example: 'хороший педиатор',
    description: 'информация о враце',
  })
  info: string;
  @ApiProperty({ example: 'Педиатор', description: 'Направление в медецине' })
  post: string;
  @ApiProperty({ example: '222', description: 'номер кабинета' })
  office: number;
  @ApiProperty({
    example: '1',
    description: 'айди клиники в которой находится врач',
  })
  clinicid: number[];
  @ApiProperty({ example: '1', description: 'номер записи к врачу' })
  recordingid: number[];
}
