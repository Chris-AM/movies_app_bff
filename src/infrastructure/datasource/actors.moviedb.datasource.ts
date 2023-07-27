//* Nest Imports
import { Injectable } from '@nestjs/common';
//* Own Imports
import { AxiosService, EnvironmentConfigService } from '../../config/config';
import { ActorEntity, ActorsDataSource } from 'src/domain/domain';
import { ActorsResponse } from '../infrastructure';

@Injectable()
export class ActorsMovieDBDatasource implements ActorsDataSource {
  constructor(
    private readonly connection: AxiosService,
    private readonly config: EnvironmentConfigService,
  ) { }

  async getActorsByMovieId(movieId: string): Promise<ActorEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/movie/${movieId}/credits?api_key=${this.config.getMovieDBApiKey()}`;
    const data = await this.connection.get<string>(url);
    const creditsResponse = ActorsResponse.toActorsMovieDBModel(data);

    const actors: ActorEntity[] = creditsResponse.cast.map((castData) => {
      const actorEntity = new ActorEntity();
      actorEntity.id = castData.id;
      actorEntity.name = castData.name;
      actorEntity.profilePath = castData.profile_path || '';
      actorEntity.character = castData.character || '';
      return actorEntity;
    });

    return actors;
  }
}
