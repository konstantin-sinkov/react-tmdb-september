import {configureStore} from "@reduxjs/toolkit";
import moviesPageReducer from './moviesPage.slice';

const store = configureStore({
    reducer: {
        moviesPageReducer
    }
});

export default store;