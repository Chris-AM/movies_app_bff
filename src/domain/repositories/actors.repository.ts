import { ActorEntity } from '../entities/actor.entity';

export interface ActorsRepository {
  getActorsByMovieId(movieId: string): Promise<ActorEntity[]>;
}
