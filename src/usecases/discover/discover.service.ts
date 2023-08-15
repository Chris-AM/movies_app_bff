import { Injectable } from '@nestjs/common';
import { QueryDto } from 'src/config/dto/query.dto';
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
  private async getGenres(queryDto: QueryDto): Promise<GenreEntity[]> {
    const { language } = queryDto;
    return await this.genresDatasource.getGenres(language);
  }

  async getDataForPosters(queryDto: QueryDto) {
    const { language } = queryDto;
    const genres = await this.getGenres(queryDto);
    const dataForPosters = await Promise.all(genres.map(async (genre) => {
      const movies = await this.discoverDatasource.getMoviesByGenreId(genre.id, 1, language);
      const firstMovie = movies.length > 0 ? movies[0] : null;
      return {
        genreName: genre.name,
        movie: firstMovie.posterPath,
      };
    }));
  
    return dataForPosters;
  }

  async getMoviesByGenreId(genreId: number, queryDto: QueryDto): Promise<MovieEntity[]> {
    const { language, page,} = queryDto;
    return await this.discoverDatasource.getMoviesByGenreId(genreId, page, language);
  }
}
