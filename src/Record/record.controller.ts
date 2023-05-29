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
import { RecordService } from './record.service';
import { Record } from './record.entity';
import { CreateRecordDto } from './dto/RecordDTO';
@Controller('records')
@ApiTags('Записи')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}
  @Get()
  findAll() {
    return this.recordService.findAll();
  }
  @ApiOperation({ summary: 'Поиск записи' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.recordService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRecord: Record) {
    return this.recordService.update(+id, updateRecord);
  }
  @ApiOperation({ summary: 'Добавить запись' })
  @Post()
  create(@Body() CreateRecord: CreateRecordDto) {
    return this.recordService.create(CreateRecord);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordService.remove(+id);
  }
}
