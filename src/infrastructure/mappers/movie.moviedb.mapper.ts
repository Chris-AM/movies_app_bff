import { MovieEntity } from 'src/domain/domain';
import { MovieDBModel } from '../models/movies.moviedb.model';
import { Result } from '../models/movies.moviedb.result';

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

  //   static movieDetailsToEntity(moviedb: MovieEntity): MovieEntity {
  //     return {
  //       adult: moviedb.adult,
  //       backdropPath: moviedb.backdropPath !== ''
  //         ? `https://image.tmdb.org/t/p/w500${moviedb.backdropPath}`
  //         : 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg',
  //       genreIds: moviedb.genres.map((e) => e.name),
  //       id: moviedb.id,
  //       originalLanguage: moviedb.originalLanguage,
  //       originalTitle: moviedb.originalTitle,
  //       overview: moviedb.overview,
  //       popularity: moviedb.popularity,
  //       posterPath: moviedb.posterPath !== ''
  //         ? `https://image.tmdb.org/t/p/w500${moviedb.posterPath}`
  //         : 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg',
  //       releaseDate: moviedb.releaseDate,
  //       title: moviedb.title,
  //       video: moviedb.video,
  //       voteAverage: moviedb.voteAverage,
  //       voteCount: moviedb.voteCount
  //     };
  //   }
}
