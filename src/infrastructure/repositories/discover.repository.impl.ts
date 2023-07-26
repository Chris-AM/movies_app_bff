import { Injectable } from '@nestjs/common';
import {
  DiscoverDatasource,
  DiscoverRepository,
  MovieEntity,
} from 'src/domain/domain';

@Injectable()
export class DiscoverRepositoryImpl implements DiscoverRepository {
  constructor(private readonly datasource: DiscoverDatasource) {}
  
  async getMoviesByGenreId(genreId: number, page: number): Promise<MovieEntity[]> {
    return await this.datasource.getMoviesByGenreId(genreId, page);
  }
}
