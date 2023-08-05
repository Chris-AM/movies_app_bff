import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { EnvironmentConfigService } from './config/config';

async function MoviesAppBff() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const environmentService = app.get(EnvironmentConfigService);
  const port = environmentService.getPort();
  const logger = new Logger('MoviesAppBff');

  //Versioning
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('api');

  //Global Pipes
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  //APP DOCS
  const config = new DocumentBuilder()
    .setTitle('Movies App Portfolio BFF')
    .setDescription(
      'BFF bridge between TMDB and Movies APP. Build using NestJS',
    )
    .setVersion('1.0')
    .addTag('movies')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  
  await app.listen(port);
  logger.log(`MoviesAppBff is running on port: ${port}`);
}
MoviesAppBff();
