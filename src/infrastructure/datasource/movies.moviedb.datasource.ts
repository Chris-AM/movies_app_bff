import { MovieEntity, MoviesDatasource } from 'src/domain/domain';
import { MovieDBResponse, MovieDetailResponse } from '../infrastructure';
import { AxiosService, EnvironmentConfigService } from 'src/config/config';

export class MovieDBDatasource implements MoviesDatasource {
  constructor(
    private readonly connection: AxiosService,
    private readonly config: EnvironmentConfigService,
  ) {}
  async getNowPlaying(page: number): Promise<MovieEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/movie/now_playing?api_key=${this.config.getMovieDBApiKey()}`;
    const params = {
      page: page,
    };
    const movies = await this.movieResponse(url, params);
    return movies;
  }

  async getPopular(page: number): Promise<MovieEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/movie/popular`;
    const params = {
      page: page,
    };
    const movies = await this.movieResponse(url, params);
    return movies;
  }

  async getUpcoming(page: number): Promise<MovieEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/movie/upcoming`;
    const params = {
      page: page,
    };
    const movies = await this.movieResponse(url, params);
    return movies;
  }

  async topRated(page: number): Promise<MovieEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/movie/top_rated`;
    const params = {
      page: page,
    };
    const movies = await this.movieResponse(url, params);
    return movies;
  }

  async getMovieById(id: number): Promise<MovieEntity> {
    const url = `${this.config.getMovieDBUrl()}/movie/${id}`;
    const data = await this.connection.get<string>(url);
    const movieResponse = MovieDetailResponse.toMovieDetailDBModel(data);
    const movieEntity = new MovieEntity();
    movieEntity.id = movieResponse.id;
    movieEntity.title = movieResponse.title;
    movieEntity.overview = movieResponse.overview;
    movieEntity.posterPath = movieResponse.poster_path || '';
    movieEntity.backdropPath = movieResponse.backdrop_path || '';
    movieEntity.releaseDate = movieResponse.release_date;
    movieEntity.voteAverage = movieResponse.vote_average;
    return movieEntity;
  }

  async searchMovies(searchTerm: string): Promise<MovieEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/movie/top_rated`;
    const params = {
      query: searchTerm,
    };
    const movies = await this.movieResponse(url, params);
    return movies;
  }

  async getVideosFromYouTube(movieId: number): Promise<MovieEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/movie/${movieId}/videos`;

    const movies = await this.movieResponse(url);
    return movies;
  }

  async getSimilarMovies(movieId: number): Promise<MovieEntity[]> {
    const url = `${this.config.getMovieDBUrl()}/movie/${movieId}/similar`;
    const movies = await this.movieResponse(url);
    return movies;
  }

  private async movieResponse(
    url: string,
    params?: any,
  ): Promise<MovieEntity[]> {
    const data = await this.connection.get<string>(url, params);
    const response = MovieDBResponse.toMovieDBModel(data);
    const movies: MovieEntity[] = response.results.map((resultData) => {
      const movieEntity = new MovieEntity();
      movieEntity.id = resultData.id;
      movieEntity.title = resultData.title;
      movieEntity.overview = resultData.overview;
      movieEntity.posterPath = resultData.poster_path || '';
      movieEntity.backdropPath = resultData.backdrop_path || '';
      movieEntity.releaseDate = resultData.release_date;
      movieEntity.voteAverage = resultData.vote_average;
      return movieEntity;
    });
    return movies;
  }
}
