import { Injectable } from '@nestjs/common';
import { ActorEntity } from 'src/domain/domain';
import { ActorsMovieDBDatasource } from 'src/infrastructure/infrastructure';

@Injectable()
export class ActorsService {
  constructor(private readonly datasource: ActorsMovieDBDatasource) {}
  async getActorsByMovieId(movieId: string): Promise<ActorEntity[]> {
    return await this.datasource.getActorsByMovieId(movieId);
  }
}
