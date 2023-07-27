import { Module } from '@nestjs/common';
import { EnvironmentConfigModule, AxiosService } from './config/config';

@Module({
  imports: [EnvironmentConfigModule ],
  providers: [AxiosService],
})
export class AppModule {}
