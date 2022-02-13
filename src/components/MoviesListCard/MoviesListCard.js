import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

import {GenreBadge, PosterPreview, StarRating} from '../index';
import css from './MoviesListCard.module.css';

const MoviesListCard = ({movie, darkMode}) => {
    const {
        id, poster_path, title,
        overview, genre_ids, vote_average
    } = movie;
    
    return (
        <div className={css.card_item}>
            <Link to={`movie/${id.toString()}`} state={id}>
                <Card bg={!darkMode ? "light" : "dark"}>
                    <PosterPreview posterPath={poster_path}/>
                    <Card.Body className={!darkMode ? css.card_text__light : css.card_text__dark}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className={css.overview_text}>{overview}</Card.Text>
                        <GenreBadge genreIds={genre_ids}/>
                        <hr />
                        <StarRating ratingIMDB={vote_average}/>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

export {MoviesListCard};