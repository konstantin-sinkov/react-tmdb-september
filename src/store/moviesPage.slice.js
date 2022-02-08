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
)

const moviesPageSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        movies: [],
        genres: [],
        filmDetailInfo: {},
        darkMode: false,
        currentPage: 1
    },
    reducers: {
    
    },
    extraReducers: {
        [getMovies.pending]: (state, action) => {
        },
        [getMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
        }
    }
});

const moviesPageReducer = moviesPageSlice.reducer;

export const {} = moviesPageSlice.actions;

export default moviesPageReducer;