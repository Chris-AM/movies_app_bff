import { ActorEntity } from '../entities/actor.entity';

export interface ActorsDataSource {
  getActorsByMovieId(movieId: string): Promise<ActorEntity[]>;
}
