import { MovieEntity } from '../domain';

export interface DiscoverDatasource {
  getMoviesByGenreId(genreId: number, page: number): Promise<MovieEntity[]>;
}
