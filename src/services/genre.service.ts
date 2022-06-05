import {axiosService, Response} from "./axios.service";
import {IGenres} from "../interfaces";
import {urls} from "../constants";

const genreService = {
    getAll: (): Response<IGenres> => axiosService.get(urls.genres)
}

export {
    genreService
}