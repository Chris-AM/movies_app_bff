import { Module } from '@nestjs/common';
import { EnvironmentConfigModule, AxiosService } from './config/config';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [EnvironmentConfigModule, InfrastructureModule],
  providers: [AxiosService],
})
export class AppModule {}
