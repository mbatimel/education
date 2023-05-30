import {
  // eslint-disable-next-line prettier/prettier
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
import { ClinisServise } from './clinic.service';
import { Clinic } from './clinic.entity';
import { CreateClinicDTO } from './dto/ClinicDTO';
import { AuthGuard } from '@nestjs/passport';
@Controller('clinic')
@ApiTags('Поликлиники')
@ApiSecurity('JWT-auth')
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
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateClinic: Clinic) {
    return this.clinicsServise.update(+id, updateClinic);
  }
  @ApiOperation({ summary: 'Создание сетевой поликлтиники' })
  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createClinic: CreateClinicDTO) {
    return this.clinicsServise.create(createClinic);
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.clinicsServise.remove(+id);
  }
}
