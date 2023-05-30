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
import { RecordService } from './record.service';
import { Record } from './record.entity';
import { CreateRecordDto } from './dto/RecordDTO';
import { AuthGuard } from '@nestjs/passport';
@Controller('records')
@ApiTags('Записи')
@ApiSecurity('JWT-auth')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}
  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.recordService.findAll();
  }
  @ApiOperation({ summary: 'Поиск записи' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.recordService.findOne(+id);
  }
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateRecord: Record) {
    return this.recordService.update(+id, updateRecord);
  }
  @ApiOperation({ summary: 'Добавить запись' })
  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() CreateRecord: CreateRecordDto) {
    return this.recordService.create(CreateRecord);
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.recordService.remove(+id);
  }
}
