import { Injectable } from '@nestjs/common';
import { AxiosService, EnvironmentConfigService } from 'src/config/config';
import { DiscoverDatasource, MovieEntity } from 'src/domain/domain';
import { MovieDBResponse } from '../infrastructure';

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
    const url = `${this.config.getMovieDBUrl()}/discover/movie`;
    const params = {
      with_genres: genreId,
      page: page,
    };
    const data = await this.connection.get<string>(url, params);
    const discoverResponse = MovieDBResponse.toMovieDBModel(data);

    const movies: MovieEntity[] = discoverResponse.results.map((resultData) => {
      const movieEntity = new MovieEntity();
      movieEntity.id = resultData.id;
      movieEntity.title = resultData.title;
      movieEntity.overview = resultData.overview;
      movieEntity.posterPath = resultData.poster_path || '';
      movieEntity.backdropPath = resultData.backdrop_path || '';
      movieEntity.releaseDate = resultData.release_date;
      movieEntity.voteAverage = resultData.vote_average;
      return movieEntity;
    });

    return movies;
  }
}
