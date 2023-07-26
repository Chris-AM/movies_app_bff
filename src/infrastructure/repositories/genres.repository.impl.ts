import { Injectable } from '@nestjs/common';
import {
  GenresRepository,
  GenreEntity,
  GenresDataSource,
} from 'src/domain/domain';

@Injectable()
export class GenresRepositoryImpl implements GenresRepository {
  constructor(private readonly datasource: GenresDataSource) {}

  async getGenres(): Promise<GenreEntity[]> {
    return await this.datasource.getGenres();
  }
}
