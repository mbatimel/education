import { ApiProperty } from '@nestjs/swagger';
export class CreateRecordDto {
  @ApiProperty({ example: '2003-03-10', description: 'Дата записи' })
  dateofrecording: Date;
  @ApiProperty({ example: '10:10:0000', description: 'Вермя записи' })
  timeofrecording: Date;
  @ApiProperty({ example: '1', description: 'айди врача' })
  doctorid: number[];
  @ApiProperty({ example: '1', description: 'айди пациента' })
  clientid: number[];
}
