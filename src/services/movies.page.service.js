import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";

export const moviesService = {
    getMovies: (page) => axiosService.get(urls.movies, {params: {page}}).then(value => value.data),
    getGenres: () => axiosService.get(urls.genres).then(value => value.data.genres),
    getMovieById: (id) => axiosService.get(`${urls.movieById}/${id}`).then(value => value.data)
}