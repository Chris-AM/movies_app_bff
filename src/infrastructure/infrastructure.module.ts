import { Module } from '@nestjs/common';
import {
  ActorsRepositoryImpl,
  DiscoverRepositoryImpl,
  GenresRepositoryImpl,
  MovieRepositoryImpl,
} from './infrastructure';

@Module({
  providers: [
    ActorsRepositoryImpl,
    DiscoverRepositoryImpl,
    GenresRepositoryImpl,
    MovieRepositoryImpl,
  ],
  exports: [
    ActorsRepositoryImpl,
    DiscoverRepositoryImpl,
    GenresRepositoryImpl,
    MovieRepositoryImpl,
  ],
})
export class InfrastructureModule {}
