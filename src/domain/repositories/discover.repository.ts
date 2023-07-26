import { MovieEntity } from '../domain';

export interface DiscoverRepository {
  getMoviesByGenreId(genreId: number, page: number): Promise<MovieEntity[]>;
}
