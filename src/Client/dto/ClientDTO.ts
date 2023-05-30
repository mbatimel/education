import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDTO {
  @ApiProperty({ example: 'ФИО', description: 'ФИО' })
  Fullname: string;
  @ApiProperty({ example: '2003-03-10', description: 'дата рождения' })
  Birthday: Date;
  @ApiProperty({ example: '20', description: 'возраст' })
  age: number;
  @ApiProperty({ example: '89150212165', description: 'номер телефона' })
  phone: string;
  @ApiProperty({ example: 'муж', description: 'пол' })
  gender: string;
  @ApiProperty({ example: 'Ул. Пушкина, д.3', description: 'адресс' })
  address: string;
  @ApiProperty({ example: 'школа 17', description: 'место работы/учебы' })
  workORstudy: string;
  @ApiProperty({ example: '[1]', description: 'номер записи к врачу' })
  recordingid: number[];
}
