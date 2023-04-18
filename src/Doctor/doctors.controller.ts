import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DoctorsServise } from './doctors.service';
import { Doctor } from './doctor.entity';
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsServise: DoctorsServise) {}
  @Get()
  findAll() {
    return this.doctorsServise.findAll();
  }
  @Get(':office')
  findOne(@Param('office') office: number) {
    return this.doctorsServise.findOne(+office);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDoctor: Doctor) {
    return this.doctorsServise.update(+id, updateDoctor);
  }
  @Post()
  create(@Body() createDoctor: Doctor) {
    return this.doctorsServise.create(createDoctor);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsServise.remove(+id);
  }
}
