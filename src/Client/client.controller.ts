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
import { ClientsServise } from './client.service';
import { Client } from './client.entity';
import { CreateClientDTO } from './dto/ClientDTO';
@ApiTags('Клиенты')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsServise: ClientsServise) {}
  @Get()
  findAll() {
    return this.clientsServise.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clientsServise.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateClients: Client) {
    return this.clientsServise.update(+id, updateClients);
  }
  @ApiOperation({ summary: 'Добавление клиента в базу клиники' })
  @Post()
  create(@Body() createClient: CreateClientDTO) {
    return this.clientsServise.create(createClient);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsServise.remove(+id);
  }
}
