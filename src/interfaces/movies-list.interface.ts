import {IMovieShortInfo} from "./movie-short-info.interface";

export interface IMoviesList {
    page: number
    results: IMovieShortInfo[]
    total_pages: number,
    total_results: number
}