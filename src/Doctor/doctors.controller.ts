import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { DoctorsServise } from './doctors.service';
import { Doctor } from './doctor.entity';
import { CreateDcotorDto } from './dto/DoctorDTO';
import { AuthGuard } from '@nestjs/passport';
@Controller('doctors')
@ApiTags('Доктора')
@ApiSecurity('JWT-auth')
export class DoctorsController {
  constructor(private readonly doctorsServise: DoctorsServise) {}
  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.doctorsServise.findAll();
  }
  @ApiOperation({ summary: 'Поиск кабинета врача' })
  @Get(':office')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('office') office: number) {
    return this.doctorsServise.findOne(+office);
  }
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateDoctor: Doctor) {
    return this.doctorsServise.update(+id, updateDoctor);
  }
  @ApiOperation({ summary: 'Добавление врача' })
  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createDoctor: CreateDcotorDto) {
    return this.doctorsServise.create(createDoctor);
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.doctorsServise.remove(+id);
  }
}
