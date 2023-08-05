import { Injectable } from '@nestjs/common';
import { GenreEntity, MovieEntity } from 'src/domain/domain';
import {
  DiscoverMovieDBDatasource,
  GenresMovieDBDatasource,
} from 'src/infrastructure/infrastructure';

@Injectable()
export class DiscoverService {
  constructor(
    private readonly genresDatasource: GenresMovieDBDatasource,
    private readonly discoverDatasource: DiscoverMovieDBDatasource,
  ) {}
  private async getGenres(): Promise<GenreEntity[]> {
    return await this.genresDatasource.getGenres();
  }

  async getDataForPosters() {
    const genres = await this.getGenres();
    const dataForPosters = await Promise.all(genres.map(async (genre) => {
      const movies = await this.discoverDatasource.getMoviesByGenreId(genre.id, 1);
      const firstMovie = movies.length > 0 ? movies[0] : null;
      return {
        genreName: genre.name,
        movie: firstMovie.posterPath,
      };
    }));
  
    return dataForPosters;
  }

  async getMoviesByGenreId(genreId: number, page: number): Promise<MovieEntity[]> {
    if (page < 1 || page == undefined) {
      page = 1;
    }
    return await this.discoverDatasource.getMoviesByGenreId(genreId, page);
  }
}
