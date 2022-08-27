import { Injectable } from '@nestjs/common';
import { CreateDigitalEngagementDto } from './dto/create-digital-engagement.dto';
import { UpdateDigitalEngagementDto } from './dto/update-digital-engagement.dto';

@Injectable()
export class DigitalEngagementService {
  getWatsonSessionId() {
    try {
      return 'This action get a new digitalEngagement';
    } catch (err) {}
  }

  create(createDigitalEngagementDto: CreateDigitalEngagementDto) {
    return 'This action adds a new digitalEngagement';
  }

  findAll() {
    return `This action returns all digitalEngagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} digitalEngagement`;
  }

  update(id: number, updateDigitalEngagementDto: UpdateDigitalEngagementDto) {
    return `This action updates a #${id} digitalEngagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} digitalEngagement`;
  }
}
