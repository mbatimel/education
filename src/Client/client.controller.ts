import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientsServise } from './client.service';
import { Client } from './client.entiti';
import { CreateClientDTO } from './dto/ClientDTO';
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
  @Post()
  create(@Body() createClient: CreateClientDTO) {
    return this.clientsServise.create(createClient);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsServise.remove(+id);
  }
}
