import { MovieEntity } from 'src/domain/domain';
import { MovieDBModel } from '../models/movies.moviedb.model';
import { Result } from '../models/movies.moviedb.result';
import { MovieDetailDBModel } from '../models/movie-detail.moviedb.models';

export class MovieMapper {
  static movieDBToEntity(movieModel: Result): MovieEntity {
    return {
      adult: movieModel.adult,
      backdropPath:
        movieModel.backdrop_path === '' || movieModel.backdrop_path === null
          ? `https://image.tmdb.org/t/p/w500${movieModel.backdrop_path}`
          : 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg',
      genreIds: movieModel.genre_ids.map((e) => e.toString()),
      id: movieModel.id,
      originalLanguage: movieModel.original_language,
      originalTitle: movieModel.original_title,
      overview: movieModel.overview,
      popularity: movieModel.popularity,
      posterPath:
        movieModel.poster_path !== ''
          ? `https://image.tmdb.org/t/p/w500${movieModel.poster_path}`
          : 'https://www.movienewz.com/img/films/poster-holder.jpg',
      releaseDate:
        movieModel.release_date != null ? movieModel.release_date : new Date(),
      title: movieModel.title,
      video: movieModel.video,
      voteAverage: movieModel.vote_average,
      voteCount: movieModel.vote_count,
    };
  }

    static movieDetailsToEntity(movieModel: MovieDetailDBModel): MovieEntity {
      return {
        adult: movieModel.adult,
        backdropPath: movieModel.backdrop_path !== ''
          ? `https://image.tmdb.org/t/p/w500${movieModel.backdrop_path}`
          : 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg',
        genreIds: movieModel.genres.map((e) => e.toString()),
        id: movieModel.id,
        originalLanguage: movieModel.original_language,
        originalTitle: movieModel.original_title,
        overview: movieModel.overview,
        popularity: movieModel.popularity,
        posterPath: movieModel.poster_path !== ''
          ? `https://image.tmdb.org/t/p/w500${movieModel.poster_path}`
          : 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg',
        releaseDate: movieModel.release_date,
        title: movieModel.title,
        video: movieModel.video,
        voteAverage: movieModel.vote_average,
        voteCount: movieModel.vote_count
      };
    }
}
