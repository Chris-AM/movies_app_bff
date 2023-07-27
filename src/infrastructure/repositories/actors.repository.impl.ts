import { Injectable } from '@nestjs/common';
import {
  ActorEntity,
  ActorsDataSource,
  ActorsRepository,
} from 'src/domain/domain';

@Injectable(
  
)
export class ActorsRepositoryImpl implements ActorsRepository {
  constructor(private readonly datasource: ActorsDataSource) {}

  async getActorsByMovieId(movieId: string): Promise<ActorEntity[]> {
    return await this.datasource.getActorsByMovieId(movieId);
  }
}
