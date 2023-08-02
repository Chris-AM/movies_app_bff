import { Injectable } from '@nestjs/common';
import { MovieEntity } from 'src/domain/domain';
import { MovieDBDatasource } from 'src/infrastructure/infrastructure';

@Injectable()
export class MoviesService {
  constructor(private readonly datasource: MovieDBDatasource) {}

  async getNowPlaying(page: number): Promise<MovieEntity[]> {
    return await this.datasource.getNowPlaying(page);
  }

  async getPopular(page: number) {
    return await this.datasource.getPopular(page);
  }

  async getUpcoming(page: number) {
    return await this.datasource.getUpcoming(page);
  }

  async topRated(page: number) {
    return await this.datasource.topRated(page);
  }

  async getMovieById(id: number) {
    return await this.datasource.getMovieById(id);
  }

  async searchMovies(searchTerm: string) {
    return await this.datasource.searchMovies(searchTerm);
  }

  async getVideosFromYouTube(movieId: number) {
    return await this.datasource.getVideosFromYouTube(movieId);
  }

  async getSimilarMovies(movieId: number) {
    return await this.datasource.getSimilarMovies(movieId);
  }
}
