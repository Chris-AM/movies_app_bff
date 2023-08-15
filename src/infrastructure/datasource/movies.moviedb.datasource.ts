import { Injectable } from '@nestjs/common';
import { MovieEntity, MoviesDatasource } from 'src/domain/domain';
import {
  MovieDBResponse,
  MovieDetailResponse,
  MovieMapper,
} from '../infrastructure';
import { AxiosService, EnvironmentConfigService } from 'src/config/config';

@Injectable()
export class MovieDBDatasource implements MoviesDatasource {
  constructor(
    private readonly connection: AxiosService,
    private readonly config: EnvironmentConfigService,
  ) {}

  async getNowPlaying(page: number, language: string): Promise<MovieEntity[]> {
    const url = this.urlManager('movie/now_playing', language, page);
    const movies = await this.movieResponse(url);
    return movies;
  }

  async getPopular(page: number, language: string): Promise<MovieEntity[]> {
    const url = this.urlManager('movie/popular', language, page);
    const movies = await this.movieResponse(url);
    return movies;
  }

  async getUpcoming(page: number, language: string): Promise<MovieEntity[]> {
    const url = this.urlManager('movie/upcoming', language, page);
    const movies = await this.movieResponse(url);
    return movies;
  }

  async topRated(page: number, language: string): Promise<MovieEntity[]> {
    const url = this.urlManager('movie/top_rated', language, page);
    const movies = await this.movieResponse(url);
    return movies;
  }

  async getMovieById(id: number, language: string): Promise<MovieEntity> {
    const url = `${this.config.getMovieDBUrl()}/movie/${id}?api_key=${this.config.getMovieDBApiKey()}&language=${language}`;
    const data = await this.connection.get<string>(url);
    const movieResponse = MovieDetailResponse.toMovieDetailDBModel(data);
    const movieEntity = MovieMapper.movieDetailsToEntity(movieResponse);
    return movieEntity;
  }

  async searchMovies(
    searchTerm: string,
    language: string,
  ): Promise<MovieEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/search/movie?api_key=${this.config.getMovieDBApiKey()}&query=${searchTerm}&language=${language}`;
    const movies = await this.movieResponse(url);
    return movies;
  }

  async getVideosFromYouTube(
    movieId: number,
    language: string,
  ): Promise<MovieEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/movie/${movieId}/videos?api_key=${this.config.getMovieDBApiKey()}&language=${language}`;
    const movies = await this.movieResponse(url);
    return movies;
  }

  async getSimilarMovies(
    movieId: number,
    language: string,
  ): Promise<MovieEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/movie/${movieId}/similar?api_key=${this.config.getMovieDBApiKey()}&language=${language}`;
    const movies = await this.movieResponse(url);
    return movies;
  }

  private urlManager(variable: string, language: string, page: number) {
    return `${this.config.getMovieDBUrl()}/${variable}?api_key=${this.config.getMovieDBApiKey()}&language=${language}&page=${page}`;
  }

  private async movieResponse(url: string): Promise<MovieEntity[]> {
    const data = await this.connection.get<string>(url);
    const response = MovieDBResponse.toMovieDBModel(data);
    const movies: MovieEntity[] = response.results.map((resultData) => {
      const movieEntity = MovieMapper.movieDBToEntity(resultData);
      return movieEntity;
    });
    return movies;
  }
}
