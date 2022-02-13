import React from "react";
import {Route, Routes} from "react-router-dom";

import css from './App.module.css';
import {Header} from "./components";
import {MovieDetailsPage, MoviesPage} from "./pages";
import {useSelector} from "react-redux";

function App() {
    //useEffect (theme) => dep [theme],
    //generate dynamically className
    
    const {currentPage} = useSelector(state => state['moviesPageReducer']);
    
    return (
        <div className={css}>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route index path={`movies`} element={<MoviesPage/>} />
                    <Route path={'movies/movie/:id'} element={<MovieDetailsPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
