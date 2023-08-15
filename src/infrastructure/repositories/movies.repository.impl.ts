import {
  MovieEntity,
  MoviesDatasource,
  MoviesRepository,
} from 'src/domain/domain';

export class MovieRepositoryImpl implements MoviesRepository {
  constructor(private readonly datasource: MoviesDatasource) {}

  async getNowPlaying(page: number, language: string): Promise<MovieEntity[]> {
    return await this.datasource.getNowPlaying(page, language);
  }
  async getPopular(page: number, language: string): Promise<MovieEntity[]> {
    return await this.datasource.getPopular(page, language);
  }
  async getUpcoming(page: number, language: string): Promise<MovieEntity[]> {
    return await this.datasource.getUpcoming(page, language);
  }
  async topRated(page: number, language: string): Promise<MovieEntity[]> {
    return await this.datasource.topRated(page, language);
  }
  async getMovieById(id: number, language: string): Promise<MovieEntity> {
    return await this.datasource.getMovieById(id, language);
  }
  async searchMovies(
    searchTerm: string,
    language: string,
  ): Promise<MovieEntity[]> {
    return await this.datasource.searchMovies(searchTerm, language);
  }
  async getVideosFromYouTube(
    movieId: number,
    language: string,
  ): Promise<MovieEntity[]> {
    return await this.datasource.getVideosFromYouTube(movieId, language);
  }
  async getSimilarMovies(
    movieId: number,
    language: string,
  ): Promise<MovieEntity[]> {
    return await this.datasource.getSimilarMovies(movieId, language);
  }
}
