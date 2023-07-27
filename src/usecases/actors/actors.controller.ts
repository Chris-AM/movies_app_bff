import { Controller, Get, Param } from '@nestjs/common';
import { ActorsService } from './actors.service';

@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Get(':movieId/')
  async getActorsByMovieId(@Param('movieId') movieId: string) {
    return await this.actorsService.getActorsByMovieId(movieId);
  }
}
