import {axiosService, Response} from "./axios.service";
import {IMoviesDetails, IMoviesList} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll: (page: string = '1', with_genres: string = ''): Response<IMoviesList> => axiosService.get(urls.movies, {params: {page, with_genres}}),
    getById: (id: string): Response<IMoviesDetails> => axiosService.get(`${urls.movie}/${id}`)
}

export {
    movieService
}