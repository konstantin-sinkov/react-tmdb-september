import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getGenres, getMovies} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {
    //Add changing status status and <Loader component>
    const {movies, genres, status} = useSelector(state => state['moviesPageReducer']);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMovies());
        dispatch(getGenres());
    }, []);
    
    return (
        <div>
            {movies.map(movie =>
                <MoviesListCard
                    key={movie.id}
                    movie={movie}
                    genres={genres}
                />)}
        </div>
    );
}

export {MoviesList};