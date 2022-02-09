import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";

export const moviesService = {
    getMovies: () => axiosService.get(urls.movies).then(value => value.data.results),
    getGenres: () => axiosService.get(urls.genres).then(value => value.data.genres),
    getMovieById: (id) => axiosService.get(`${urls.movieById}/${id}`)
}