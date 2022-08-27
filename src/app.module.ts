import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';
import { DigitalEngagementModule } from './digital-engagement/digital-engagement.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
      envFilePath: '.env',
      isGlobal: true,
    }),
    DigitalEngagementModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
