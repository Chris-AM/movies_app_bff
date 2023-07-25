import { MovieEntity } from '../entities/movie.entity';

export interface MoviesRepository {
  getMovies(page: number): Promise<MovieEntity>[];
  getPopular(page: number): Promise<MovieEntity>[];
  getUpcoming(page: number): Promise<MovieEntity>[];
  topRated(page: number): Promise<MovieEntity>[];
  getMovieById(id: number): Promise<MovieEntity>;
  searchMovies(searchTerm: string): Promise<MovieEntity>[];
  getVideosFromYouTube(movieId: number): Promise<MovieEntity>[];
  getSimilarMovies(movieId: number): Promise<MovieEntity>[];
}
