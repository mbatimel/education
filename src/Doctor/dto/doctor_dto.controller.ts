import { Controller, Get } from '@nestjs/common';
import { DoctorsServise } from '../doctors.service';
@Controller('doctors')
export class DoctorsControllerDTO {
  constructor(private readonly doctorsServise: DoctorsServise) {}
  @Get('incomplete')
  findIncomplete() {
    return this.doctorsServise.findIncomplete();
  }
}
