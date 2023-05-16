import {
  // eslint-disable-next-line prettier/prettier
    Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClinisServise } from './clinic.service';
import { Clinic } from './clinic.entity';
import { CreateClinicDTO } from './dto/ClinicDTO';
import { Roles } from 'src/Guard/role.decorator';
import { Role } from 'src/Guard/role.enum';
@Controller('clinic')
@ApiTags('Поликлиники')
export class ClinicsController {
  constructor(private readonly clinicsServise: ClinisServise) {}
  @Get()
  findAll() {
    return this.clinicsServise.findAll();
  }
  @Get(':FullAddress')
  findOne(@Param('FullAddress') FullAddress: string) {
    return this.clinicsServise.findOne(FullAddress);
  }
  @Put(':id')
  @Roles(Role.Admin)
  update(@Param('id') id: string, @Body() updateClinic: Clinic) {
    return this.clinicsServise.update(+id, updateClinic);
  }
  @ApiOperation({ summary: 'Создание сетевой поликлтиники' })
  @Post()
  @Roles(Role.Admin)
  create(@Body() createClinic: CreateClinicDTO) {
    return this.clinicsServise.create(createClinic);
  }
  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id') id: string) {
    return this.clinicsServise.remove(+id);
  }
}
