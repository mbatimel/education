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
import { Clinic } from './clinic.entiti';
@Controller('clinics')
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
  update(@Param('id') id: string, @Body() updateClinic: Clinic) {
    return this.clinicsServise.update(+id, updateClinic);
  }
  @ApiOperation({ summary: 'Создание сетевой поликлтиники' })
  @Post()
  create(@Body() createClinic: Clinic) {
    return this.clinicsServise.create(createClinic);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicsServise.remove(+id);
  }
}
