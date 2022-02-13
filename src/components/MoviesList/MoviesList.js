import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from "react-bootstrap";

import {getGenres, getMovies, goToNextPage, goToPreviousPage} from "../../store";
import {Loader, MoviesListCard, Paginator} from "../index";
import css from './MoviesList.module.css';


const MoviesList = () => {
    //Add changing status status and <Loader component>
    const {movies, genres, isLoading, currentPage} = useSelector(state => state['moviesPageReducer']);
    console.log()
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMovies(currentPage));
        dispatch(getGenres());
    }, [currentPage]);
    
    const toNextPage = () => {
        dispatch(goToNextPage(currentPage));
    }
    
    const toPrevPage = () => {
        dispatch(goToPreviousPage(currentPage));
    }
    
    return (
        <div>
            {isLoading ? <Loader/> :
                <div className={css.wrap}>
                    <div className={css.paginator_wrap}>
                        <Paginator toNextPage={toNextPage} toPrevPage={toPrevPage} page={currentPage}/>
                    </div>
                    <Container className={css.container_wrap}>
                        {movies.map(movie =>
                            <MoviesListCard
                                key={movie.id}
                                movie={movie}
                                genres={genres}
                            />)}
                    </Container>
                </div>
            }
        </div>
    );
}

export {MoviesList};