import {
  ActorEntity,
  ActorsDataSource,
  ActorsRepository,
} from 'src/domain/domain';

export class ActorsRepositoryImpl implements ActorsRepository {
  constructor(private readonly datasource: ActorsDataSource) {}

  async getActorsByMovieId(movieId: string): Promise<ActorEntity[]> {
    return await this.datasource.getActorsByMovieId(movieId);
  }
}