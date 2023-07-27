import { Module } from '@nestjs/common';
import { AxiosService, EnvironmentConfigModule } from './config';

@Module({
  imports: [EnvironmentConfigModule],
  providers: [AxiosService],
  exports: [AxiosService],
})
export class ConfigModule {}
