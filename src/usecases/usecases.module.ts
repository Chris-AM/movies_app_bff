import { Module } from '@nestjs/common';
import { ActorsService } from './actors/actors.service';
import { ActorsController } from './actors/actors.controller';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { MoviesService } from './movies/movies.service';
import { MoviesController } from './movies/movies.controller';


@Module({
  imports: [InfrastructureModule],
  providers: [ActorsService, MoviesService],
  controllers: [ActorsController, MoviesController]
})
export class UsecasesModule {}
