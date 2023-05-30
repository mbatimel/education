import { Controller, Get } from '@nestjs/common';
import { DoctorsServise } from '../doctors.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Доктора(для не зарегестрированных пользователей)')
@Controller('doctorsDto')
export class DoctorsControllerDTO {
  constructor(private readonly doctorsServise: DoctorsServise) {}
  @Get('incomplete')
  findIncomplete() {
    return this.doctorsServise.findIncomplete();
  }
}
