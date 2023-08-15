import { GenreEntity } from '../entities/genres.entity';

export interface GenresRepository {
  getGenres(language: string): Promise<GenreEntity[]>;
}
