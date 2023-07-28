import { Injectable } from '@nestjs/common';
import { AxiosService, EnvironmentConfigService } from 'src/config/config';
import { GenresDataSource } from 'src/domain/domain';
import { GenreEntity } from 'src/domain/entities/genres.entity';
import { GenreResponse } from '../infrastructure';

@Injectable()
export class GenresMovieDBDatasource implements GenresDataSource {
  constructor(
    private readonly connection: AxiosService,
    private readonly config: EnvironmentConfigService,
  ) {}

  async getGenres(): Promise<GenreEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/genre/movie/list`;
    const data = await this.connection.get<string>(url);
    const genresResponse = GenreResponse.toGenreDBModel(data);

    const genres: GenreEntity[] = genresResponse.genres.map((genreData) => {
      const genreEntity = new GenreEntity();
      genreEntity.id = genreData.id;
      genreEntity.name = genreData.name;
      return genreEntity;
    });

    return genres;
  }
}
