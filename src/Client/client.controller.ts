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
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsServise: ClientsServise) {}
  @Get()
  findAll() {
    return this.clientsServise.findAll();
  }
  @Get(':dateofrecording')
  findOne(@Param('dateofrecording') dateofrecording: Date) {
    return this.clientsServise.findOne(dateofrecording);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateClients: Client) {
    return this.clientsServise.update(+id, updateClients);
  }
  @Post()
  create(@Body() createClient: Client) {
    return this.clientsServise.create(createClient);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsServise.remove(+id);
  }
}
