import { GenreEntity } from '../entities/genres.entity';

export interface GenresRepository {
  getGenres(): Promise<GenreEntity[]>;
}
