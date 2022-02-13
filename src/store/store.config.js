import {configureStore} from "@reduxjs/toolkit";
import moviesPageReducer from './moviesPage.slice';
import themeReducer from './theme.slice';

const store = configureStore({
    reducer: {
        moviesPageReducer,
        themeReducer
    }
});

export default store;