import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DigitalEngagementService } from './digital-engagement.service';
import { CreateDigitalEngagementDto } from './dto/create-digital-engagement.dto';
import { UpdateDigitalEngagementDto } from './dto/update-digital-engagement.dto';

@Controller('de')
export class DigitalEngagementController {
  constructor(
    private readonly digitalEngagementService: DigitalEngagementService,
  ) {}

  @Post('watson-session-id')
  getSessionId() {
    return this.digitalEngagementService.getWatsonSessionId();
  }

  @Get()
  findAll() {
    return this.digitalEngagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.digitalEngagementService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDigitalEngagementDto: UpdateDigitalEngagementDto,
  ) {
    return this.digitalEngagementService.update(
      +id,
      updateDigitalEngagementDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.digitalEngagementService.remove(+id);
  }
}
