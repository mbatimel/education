import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DoctorsServise } from './doctors.service';
import { Doctor } from './doctor.entity';
import { CreateDcotor } from './dto/DoctorDTO';
@Controller('doctors')
@ApiTags('Доктора')
export class DoctorsController {
  constructor(private readonly doctorsServise: DoctorsServise) {}
  @Get()
  findAll() {
    return this.doctorsServise.findAll();
  }
  @ApiOperation({ summary: 'Поиск кабинета врача' })
  @Get(':office')
  findOne(@Param('office') office: number) {
    return this.doctorsServise.findOne(+office);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDoctor: Doctor) {
    return this.doctorsServise.update(+id, updateDoctor);
  }
  @ApiOperation({ summary: 'Добавление врача' })
  @Post()
  create(@Body() createDoctor: CreateDcotor) {
    return this.doctorsServise.create(createDoctor);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsServise.remove(+id);
  }
}
