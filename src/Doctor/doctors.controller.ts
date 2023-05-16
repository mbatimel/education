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
import { CreateDcotorDto } from './dto/DoctorDTO';
import { Roles } from 'src/Guard/role.decorator';
import { Role } from 'src/Guard/role.enum';
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
  @Roles(Role.Admin)
  update(@Param('id') id: string, @Body() updateDoctor: Doctor) {
    return this.doctorsServise.update(+id, updateDoctor);
  }
  @ApiOperation({ summary: 'Добавление врача' })
  @Post()
  @Roles(Role.Admin)
  create(@Body() createDoctor: CreateDcotorDto) {
    return this.doctorsServise.create(createDoctor);
  }
  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id') id: string) {
    return this.doctorsServise.remove(+id);
  }
}
