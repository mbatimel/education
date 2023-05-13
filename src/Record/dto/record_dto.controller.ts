import { Controller } from '@nestjs/common';
import { RecordService } from '../record.service';
@Controller('doctors')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}
  // @Get('incomplete')
  // findIncomplete() {
  //   return this.recordService.findIncomplete();
  // }
}
