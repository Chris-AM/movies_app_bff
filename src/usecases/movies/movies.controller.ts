import { Controller, Get, Param, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('/now-playing')
  async getNowPlaying(@Query('page') page: number) {
    return await this.moviesService.getNowPlaying(page);
  }

  @Get('/get-popular')
  async getPopular(@Query('page') page: number) {
    return await this.moviesService.getPopular(page);
  }

  @Get('/get-upcoming')
  async getUpcoming(@Query('page') page: number) {
    return await this.moviesService.getUpcoming(page);
  }

  @Get('/top-rated')
  async topRated(@Query('page') page: number) {
    return await this.moviesService.topRated(page);
  }

  @Get('/get-movie-by/:movieId')
  async getMovieById(@Param('movieId') id: number) {
    return await this.moviesService.getMovieById(id);
  }

  @Get('search/:searchTerm')
  async searchMovies(@Param('searchTerm') searchTerm: string) {
    return await this.moviesService.searchMovies(searchTerm);
  }

}
