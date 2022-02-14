import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../services/movies.page.service";


export const getMovies = createAsyncThunk(
    'moviesPageSlice/getMovies',
    async (page, {rejectedWithValue}) => {
        try {
            const movies = await moviesService.getMovies(page);
            return movies;
        } catch (e) {
            return rejectedWithValue(e.message);
        }
    }
);

export const getGenres = createAsyncThunk(
    'moviesPageSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await moviesService.getGenres();
            return genres;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getMovieById = createAsyncThunk(
    'moviesPageSlice/getMovieById',
    async (id, {rejectWithValue}) => {
        console.log(id);
        try {
            return await moviesService.getMovieById(id);
            // dispatch(getCheckedFilm({checkedMovie}));
        } catch (e) {
            console.log(e.response.data.detail);
            // return rejectWithValue(e.response.data.detail);
        }
    }
)

export const getMoviesByGenre = createAsyncThunk(
    'moviesPageSlice/getMoviesByGenre',
    async (checkedGenre, {rejectedWithValue}) => {
        try {
            const moviesByGenre = await moviesService.getMoviesByGenre(checkedGenre);
            return moviesByGenre;
        } catch (e) {
            rejectedWithValue(e.message());
            // return rejectWithValue(e.response.data.detail);
        }
    }
)

const moviesPageSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        movies: [],
        genres: [],
        checkedFilm: null,
        isLoading: false,
        currentPage: 1,
        totalPages: null,
        checkedGenreId: null, //unnecessary state
        moviesByGenre: []
    },
    reducers: {
        goToNextPage(state) {
            state.currentPage = state.currentPage + 1;
            // console.log(state.currentPage);
            return state;
        },
        goToPreviousPage(state) {
            state.currentPage = state.currentPage - 1;
            return state;
        },
        setCheckedGenreId(state, action) {
            // console.log(action.payload);
            state.checkedGenreId = action.payload;
            return state;
        }
        
    },
    extraReducers: {
        [getMovies.pending]: (state) => {
            state.isLoading = true;
        },
        [getMovieById.pending]: (state) => {
            state.isLoading = true;
        },
        
        [getMovies.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movies = action.payload.results;
            state.totalPages = action.payload.total_pages;
        },
        [getGenres.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.genres = action.payload;
        },
        [getMovieById.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.checkedFilm = action.payload;
        },
        [getMoviesByGenre.fulfilled]: (state, action) => {
            state.moviesByGenre = action.payload.results;
            // console.log(getMoviesByGenre);
        }
    }
});

const moviesPageReducer = moviesPageSlice.reducer;

export const {goToPreviousPage, goToNextPage, setCheckedGenreId} = moviesPageSlice.actions;

export default moviesPageReducer;