import { GenreEntity } from '../entities/genres.entity';

export interface GenresDataSource {
  getGenres(language: string): Promise<GenreEntity[]>;
}
