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
import { ClientsServise } from './client.service';
import { Client } from './client.entity';
import { CreateClientDTO } from './dto/ClientDTO';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('Клиенты')
@Controller('client')
@ApiSecurity('JWT-auth')
export class ClientsController {
  constructor(private readonly clientsServise: ClientsServise) {}
  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.clientsServise.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clientsServise.findOne(id);
  }
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateClients: Client) {
    return this.clientsServise.update(+id, updateClients);
  }
  @ApiOperation({ summary: 'Добавление клиента в базу клиники' })
  @Post()
  create(@Body() createClient: CreateClientDTO) {
    return this.clientsServise.create(createClient);
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.clientsServise.remove(+id);
  }
}
