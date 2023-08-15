import { MovieEntity } from '../entities/movie.entity';

export interface MoviesDatasource {
  getNowPlaying(page: number, language: string): Promise<MovieEntity[]>;
  getPopular(page: number, language: string): Promise<MovieEntity[]>;
  getUpcoming(page: number, language: string): Promise<MovieEntity[]>;
  topRated(page: number, language: string): Promise<MovieEntity[]>;
  getMovieById(id: number, language: string): Promise<MovieEntity>;
  searchMovies(searchTerm: string, language: string): Promise<MovieEntity[]>;
  getVideosFromYouTube(
    movieId: number,
    language: string,
  ): Promise<MovieEntity[]>;
  getSimilarMovies(movieId: number, language: string): Promise<MovieEntity[]>;
}
