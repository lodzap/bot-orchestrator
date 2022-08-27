import { Module } from '@nestjs/common';
import { DigitalEngagementService } from './digital-engagement.service';
import { DigitalEngagementController } from './digital-engagement.controller';

@Module({
  controllers: [DigitalEngagementController],
  providers: [DigitalEngagementService]
})
export class DigitalEngagementModule {}
