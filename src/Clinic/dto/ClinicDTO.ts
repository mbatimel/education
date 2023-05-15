import { ApiProperty } from '@nestjs/swagger';

export class CreateClinicDTO {
  @ApiProperty({
    example: 'г.Пушкино, ул. Колотушкино, д.2а',
    description: 'Адрес',
  })
  FullAddress: string;
  @ApiProperty({ example: '5', description: 'Рейтинг' })
  Rating: number;
  @ApiProperty({
    example: '89150212165',
    description: 'Номертелефона приемной поликлиники',
  })
  phone: string;
  @ApiProperty({
    example: 'Иванов Иван Иванович',
    description: 'ФИО главврача',
  })
  HeadOf: string;
  @ApiProperty({ example: '1', description: 'айди врача' })
  docotorid: number[];
}
