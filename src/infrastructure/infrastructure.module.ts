import { Module } from '@nestjs/common';
import {
  ActorsMovieDBDatasource,
  ActorsRepositoryImpl,
} from './infrastructure';
import { ConfigModule, EnvironmentConfigModule } from 'src/config/config';

@Module({
  imports: [ConfigModule, EnvironmentConfigModule],
  providers: [ActorsMovieDBDatasource, ActorsRepositoryImpl],
  exports: [ActorsRepositoryImpl, ActorsMovieDBDatasource],
})
export class InfrastructureModule {}
