import {
  MovieEntity,
  MoviesDatasource,
  MoviesRepository,
} from 'src/domain/domain';

export class MovieRepositoryImpl implements MoviesRepository {
  constructor(private readonly datasource: MoviesDatasource) {}

  async getNowPlaying(page: number): Promise<MovieEntity[]> {
    return await this.datasource.getNowPlaying(page);
  }
  async getPopular(page: number): Promise<MovieEntity[]> {
    return await this.datasource.getPopular(page);
  }
  async getUpcoming(page: number): Promise<MovieEntity[]> {
    return await this.datasource.getUpcoming(page);
  }
  async topRated(page: number): Promise<MovieEntity[]> {
    return await this.datasource.topRated(page);
  }
  async getMovieById(id: number): Promise<MovieEntity> {
    return await this.datasource.getMovieById(id);
  }
  async searchMovies(searchTerm: string): Promise<MovieEntity[]> {
    return await this.datasource.searchMovies(searchTerm);
  }
  async getVideosFromYouTube(movieId: number): Promise<MovieEntity[]> {
    return await this.datasource.getVideosFromYouTube(movieId);
  }
  async getSimilarMovies(movieId: number): Promise<MovieEntity[]> {
    return await this.datasource.getSimilarMovies(movieId);
  }
}
