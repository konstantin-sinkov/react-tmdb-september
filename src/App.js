import React from "react";
import {Route, Routes} from "react-router-dom";

import css from './App.module.css';
import {Header} from "./components";
import {MovieDetailsPage, MoviesPage} from "./pages";

function App() {
    
    return (
        <div className={css.App}>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'movies'} element={<MoviesPage/>}>
                        <Route path={':id'} element={<MovieDetailsPage/>} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
