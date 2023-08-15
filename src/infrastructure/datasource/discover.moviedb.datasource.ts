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
    language: string,
  ): Promise<MovieEntity[]> {
    const baseUrl = `${this.config.getMovieDBUrl()}/discover/movie?`;
    const queries = `${baseUrl}api_key=${this.config.getMovieDBApiKey()}&with_genres=${genreId}&page=${page}&language=${language}`;
    const data = await this.connection.get<string>(queries);
    const discoverResponse = MovieDBResponse.toMovieDBModel(data);
    const movies: MovieEntity[] = discoverResponse.results.map((resultData) => {
      const movieEntity = MovieMapper.movieDBToEntity(resultData);
      return movieEntity;
    });

    return movies;
  }
}
