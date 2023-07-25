import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService {
  constructor(private configService: ConfigService) {}

  getMovieDBUrl(): string {
    const url = this.configService.get<string>('BASE_URL');
    return url;
  }

  getMovieDBApiKey(): string {
    const url = this.configService.get<string>('TMDB_KEY');
    return url;
  }
}
