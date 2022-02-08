import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";

export const moviesService = {
    getMovies: () => axiosService.get(urls.movies).then(value => value.data),
    getGenres: () => axiosService.get(urls.genres).then(value => value.data),
    getMovieById: (id) => axiosService.get(`${urls.movieById}/${id}`)
}