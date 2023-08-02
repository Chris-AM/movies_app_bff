import { Result } from "./movies.moviedb.result";

export interface MovieDBModel {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export class MovieDBResponse {
  public static toMovieDBModel(json: string): MovieDBModel {
    return json as any as MovieDBModel;
  }

  public static movieDetailDBModelToJson(value: MovieDBModel): string {
    return JSON.stringify(value);
  }
}
