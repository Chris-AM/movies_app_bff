import { MovieEntity } from '../domain';

export interface DiscoverRepository {
  getMoviesByGenreId(genreId: number, page: number, language: string): Promise<MovieEntity[]>;
}
