import { Module } from '@nestjs/common';
import {
  ActorsMovieDBDatasource,
  DiscoverMovieDBDatasource,
  GenresMovieDBDatasource,
  MovieDBDatasource,
} from './infrastructure';
import { ConfigModule, EnvironmentConfigModule } from 'src/config/config';

@Module({
  imports: [ConfigModule, EnvironmentConfigModule],
  providers: [
    ActorsMovieDBDatasource,
    DiscoverMovieDBDatasource,
    GenresMovieDBDatasource,
    MovieDBDatasource,
  ],
  exports: [ActorsMovieDBDatasource, MovieDBDatasource],
})
export class InfrastructureModule {}
