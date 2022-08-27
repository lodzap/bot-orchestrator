import { PartialType } from '@nestjs/mapped-types';
import { CreateDigitalEngagementDto } from './create-digital-engagement.dto';

export class UpdateDigitalEngagementDto extends PartialType(CreateDigitalEngagementDto) {}
