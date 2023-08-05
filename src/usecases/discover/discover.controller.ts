import { Controller, Get, Param, Query } from '@nestjs/common';
import { DiscoverService } from './discover.service';

@Controller('discover')
export class DiscoverController {
  constructor(private readonly discoverService: DiscoverService) {}

  @Get('data-for-posters')
  async getDataForPosters() {
    return await this.discoverService.getDataForPosters();
  }

  @Get('movies-by-genre/:genreId')
  async getMoviesByGenreId(
    @Param('genreId') genreId: number,
    @Query('page') page: number,
  ) {
    return await this.discoverService.getMoviesByGenreId(genreId, page);
  }
}
