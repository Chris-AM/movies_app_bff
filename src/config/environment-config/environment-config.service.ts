import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService {
  constructor(private configService: ConfigService) {}

  getPort(): string {
    const port = this.configService.get<string>('BFF_PORT');
    return port;
  }

  getMovieDBUrl(): string {
    const url = this.configService.get<string>('BASE_URL');
    return url;
  }

  getMovieDBApiKey(): string {
    const url = this.configService.get<string>('TMDB_KEY');
    return url;
  }
}
