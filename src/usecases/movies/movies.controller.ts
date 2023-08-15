import { Controller, Get, Param, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { QueryDto } from 'src/config/config';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('/now-playing')
  async getNowPlaying(@Query() queryDto: QueryDto) {
    return await this.moviesService.getNowPlaying(queryDto);
  }

  @Get('/get-popular')
  async getPopular(@Query() queryDto: QueryDto) {
    return await this.moviesService.getPopular(queryDto);
  }

  @Get('/get-upcoming')
  async getUpcoming(@Query() queryDto: QueryDto) {
    return await this.moviesService.getUpcoming(queryDto);
  }

  @Get('/top-rated')
  async topRated(@Query() queryDto: QueryDto) {
    return await this.moviesService.topRated(queryDto);
  }

  @Get('/get-movie-by/:movieId')
  async getMovieById(
    @Param('movieId') id: number,
    @Query() queryDto: QueryDto,
  ) {
    return await this.moviesService.getMovieById(id, queryDto);
  }

  @Get('search/:searchTerm')
  async searchMovies(
    @Param('searchTerm') searchTerm: string,
    @Query() queryDto: QueryDto,
  ) {
    return await this.moviesService.searchMovies(searchTerm, queryDto);
  }
}
