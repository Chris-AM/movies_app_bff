import { Module } from '@nestjs/common';
import { EnvironmentConfigModule, AxiosService } from './config/config';
import { UsecasesModule } from './usecases/usecases.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    UsecasesModule,
    InfrastructureModule,
    ConfigModule,
  ],
  providers: [AxiosService],
})
export class AppModule {}
