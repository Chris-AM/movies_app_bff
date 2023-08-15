import { Injectable } from '@nestjs/common';
import { QueryDto } from 'src/config/config';
import { MovieEntity } from 'src/domain/domain';
import { MovieDBDatasource } from 'src/infrastructure/infrastructure';

@Injectable()
export class MoviesService {
  constructor(private readonly datasource: MovieDBDatasource) {}

  async getNowPlaying(queryDto: QueryDto): Promise<MovieEntity[]> {
    const { language, page } = queryDto;
    return await this.datasource.getNowPlaying(page, language);
  }

  async getPopular(queryDto: QueryDto) {
    const { page, language } = queryDto;
    console.log('page', page);
    return await this.datasource.getPopular(page, language);
  }

  async getUpcoming(queryDto: QueryDto) {
    const { page, language } = queryDto;
    return await this.datasource.getUpcoming(page, language);
  }

  async topRated(queryDto: QueryDto) {
    const { page, language } = queryDto;
    return await this.datasource.topRated(page, language);
  }

  async getMovieById(id: number, queryDto: QueryDto) {
    const { language } = queryDto;
    return await this.datasource.getMovieById(id, language);
  }

  async searchMovies(searchTerm: string, queryDto: QueryDto) {
    const { language } = queryDto;
    return await this.datasource.searchMovies(searchTerm, language);
  }

  async getVideosFromYouTube(movieId: number, queryDto: QueryDto) {
    const { language } = queryDto;
    return await this.datasource.getVideosFromYouTube(movieId, language);
  }

  async getSimilarMovies(movieId: number, queryDto: QueryDto) {
    const { language } = queryDto;
    return await this.datasource.getSimilarMovies(movieId, language);
  }
}
