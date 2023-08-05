import { Injectable } from '@nestjs/common';
import { AxiosService, EnvironmentConfigService } from 'src/config/config';
import { DiscoverDatasource, MovieEntity } from 'src/domain/domain';
import { MovieDBResponse, MovieMapper } from '../infrastructure';

@Injectable()
export class DiscoverMovieDBDatasource implements DiscoverDatasource {
  constructor(
    private readonly connection: AxiosService,
    private readonly config: EnvironmentConfigService,
  ) {}

  async getMoviesByGenreId(
    genreId: number,
    page: number,
  ): Promise<MovieEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/discover/movie?api_key=${this.config.getMovieDBApiKey()}&with_genres=${genreId}&page=${page}`;
    const data = await this.connection.get<string>(url);
    const discoverResponse = MovieDBResponse.toMovieDBModel(data);
    const movies: MovieEntity[] = discoverResponse.results.map((resultData) => {
      const movieEntity = MovieMapper.movieDBToEntity(resultData);
      return movieEntity;
    });

    return movies;
  }
}
