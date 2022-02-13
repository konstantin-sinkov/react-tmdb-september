import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Card, Button, Container} from "react-bootstrap";

import {getMovieById} from "../../store";
import {Loader} from "../../components";
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const {checkedFilm} = useSelector(state => state['moviesPageReducer']);
    const {darkMode} = useSelector(state => state['themeReducer']);
    
    const {id} = useParams();
    
    const dispatch = useDispatch();
    //
    useEffect(() => {
        dispatch(getMovieById(id));
    }, [id]);
    
    return (
        <div className={!darkMode ? css.wrapper : css.wrapper__dark}>
            <Container className={!darkMode ? css.wrapper : css.wrapper__dark}>
            {checkedFilm === null ? <Loader/> :
                <Card bg={!darkMode ? 'light' : "dark"}>
                    <Card.Img variant={'top'} src={`https://image.tmdb.org/t/p/w500${checkedFilm.poster_path}`}/>
                    <Card.Body className={!darkMode ? css.lightTheme_text : css.darkTheme__text}>
                        <Card.Title>Title: {checkedFilm.title}</Card.Title>
                        <Card.Subtitle>Original title: {checkedFilm.original_title}</Card.Subtitle>
                        <Card.Text>{checkedFilm.overview}</Card.Text>
                        <Card.Text>
                            Movie budget - {`${checkedFilm.budget / 1000000} mln USD`}
                        </Card.Text>
                        <Card.Text>
                            <strong>Production companies: </strong>
                            {checkedFilm.production_companies ? checkedFilm.production_companies.map(el => `${el.name}, `) : 'no-infp'}
                        </Card.Text>
                        
                        <Button variant={!darkMode ? "dark" : 'light'} >
                            <Card.Link href={`https://www.imdb.com/title/${checkedFilm.imdb_id}`}>
                                watch on ImDb
                            </Card.Link>
                        </Button>
                    </Card.Body>
                </Card>
            }
        </Container>
        </div>
    );
}

export {MovieDetailsPage};