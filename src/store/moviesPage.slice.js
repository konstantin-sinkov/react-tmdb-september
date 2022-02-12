import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../services/movies.page.service";


export const getMovies = createAsyncThunk(
    'moviesPageSlice/getMovies',
    async (_, {rejectedWithValue}) => {
        try {
            const movies = await moviesService.getMovies();
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
            return rejectWithValue(e.response.data.detail);
        }
    }
)

const moviesPageSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        movies: [],
        genres: [],
        checkedFilm: null,
        darkMode: false, //to themeSlice
        currentPage: 1,
        totalPages: null
    },
    reducers: {
        // getCheckedFilm(state, action) {
        //     // console.log(`sdcsdc - ${action}`);
        //     state.checkedFilm = action.payload;
        // }
    },
    extraReducers: {
        [getMovies.pending]: (state, action) => {
        },
        [getGenres.pending]: (state, action) => {
        },
        [getMovieById.pending]: (state, action) => {
        },
        
        [getMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
        },
        [getGenres.fulfilled]: (state, action) => {
            state.genres = action.payload;
        },
        [getMovieById.fulfilled]: (state, action) => {
            state.checkedFilm = action.payload;
        }
    }
});

const moviesPageReducer = moviesPageSlice.reducer;

export const {} = moviesPageSlice.actions;

export default moviesPageReducer;