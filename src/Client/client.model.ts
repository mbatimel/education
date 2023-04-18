import { Module } from '@nestjs/common';
import { ClientsServise } from './client.service';
import { ClientsController } from './client.controller';
import { DatasourceModule } from 'src/Datasource /datasource.module';

@Module({
  controllers: [ClientsController],
  providers: [ClientsServise],
  imports: [DatasourceModule],
})
export class ClientsModel {}
