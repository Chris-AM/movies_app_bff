import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './config/config';
import { AxiosService } from './adapters/axios/axios.service';
import { AxiosService } from './config/adapters/axios/axios.service';

@Module({
  imports: [EnvironmentConfigModule],
  providers: [AxiosService],
})
export class AppModule {}
