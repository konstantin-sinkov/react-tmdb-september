import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {getMoviesByGenre, setCheckedGenreId} from "../../store";
import css from '../../components/MoviesList/MoviesList.module.css';
import {Container} from "react-bootstrap";
import {MoviesListCard} from "../../components";


const MoviesByGenrePage = () => {
    const {moviesByGenre, genres} = useSelector(state => state['moviesPageReducer']);
    const {darkMode} = useSelector(state => state['themeReducer']);
    
    const dispatch = useDispatch();
    
    const {state} = useLocation();
    console.log(state);
    
    useEffect(() => {
        dispatch(getMoviesByGenre(state));
        console.log(moviesByGenre);
    }, [state]);
    
    return (
        <div>
            {
                moviesByGenre.length === 0 ? '' :
                    <div>
                        <div className={!darkMode ? css.wrap : css.wrap__dark}>
                            <Container className={css.container_wrap}>
                                {
                                    
                                    moviesByGenre.map(movie =>
                                        <MoviesListCard
                                            key={movie.id}
                                            movie={movie}
                                            genres={genres}
                                            darkMode={darkMode}
                                        />
                                    )
                                }
                            </Container>
                        </div>
                    </div>
            }
        
        </div>
    );
}

export default MoviesByGenrePage;