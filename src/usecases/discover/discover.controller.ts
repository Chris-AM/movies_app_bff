import { Controller, Get, Param, Query } from '@nestjs/common';
import { DiscoverService } from './discover.service';
import { QueryDto } from 'src/config/dto/query.dto';

@Controller('discover')
export class DiscoverController {
  constructor(private readonly discoverService: DiscoverService) {}

  @Get('data-for-posters')
  async getDataForPosters(@Query() queryDto: QueryDto) {
    return await this.discoverService.getDataForPosters(queryDto);
  }

  @Get('movies-by-genre/:genreId')
  async getMoviesByGenreId(
    @Param('genreId') genreId: number,
    @Query() queryDto: QueryDto,
  ) {
    console.log('queryDto', queryDto);
    return await this.discoverService.getMoviesByGenreId(genreId, queryDto);
  }
}
