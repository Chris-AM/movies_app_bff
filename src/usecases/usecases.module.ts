import { Module } from '@nestjs/common';
import { ActorsService } from './actors/actors.service';
import { ActorsController } from './actors/actors.controller';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { MoviesService } from './movies/movies.service';
import { MoviesController } from './movies/movies.controller';
import { DiscoverService } from './discover/discover.service';
import { DiscoverController } from './discover/discover.controller';

@Module({
  imports: [InfrastructureModule],
  providers: [ActorsService, MoviesService, DiscoverService],
  controllers: [ActorsController, MoviesController, DiscoverController],
})
export class UsecasesModule {}
