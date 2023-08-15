import {
  GenresRepository,
  GenreEntity,
  GenresDataSource,
} from 'src/domain/domain';

export class GenresRepositoryImpl implements GenresRepository {
  constructor(private readonly datasource: GenresDataSource) {}

  async getGenres(language: string): Promise<GenreEntity[]> {
    return await this.datasource.getGenres(language);
  }
}
