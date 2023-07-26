import { GenreEntity } from '../entities/genres.entity';

export interface GenresDataSource {
  getGenres(): Promise<GenreEntity[]>;
}
