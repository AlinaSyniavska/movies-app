import {axiosService, Response} from "./axios.service";
import {IMovieDetails, IMoviesList} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll: (page: string = '1', with_genres: string = ''): Response<IMoviesList> => axiosService.get(urls.movies, {params: {page, with_genres}}),
    getById: (id: string): Response<IMovieDetails> => axiosService.get(`${urls.movie}/${id}`)
}

export {
    movieService
}