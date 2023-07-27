import { Module } from '@nestjs/common';
import { ActorsService } from './actors/actors.service';
import { ActorsController } from './actors/actors.controller';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';


@Module({
  imports: [InfrastructureModule],
  providers: [ActorsService],
  controllers: [ActorsController]
})
export class UsecasesModule {}
