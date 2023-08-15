import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class QueryDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  offset?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsString()
  language?: string;
}
