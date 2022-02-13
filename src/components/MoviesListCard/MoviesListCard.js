import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

import {GenreBadge, PosterPreview} from '../index';
import css from './MoviesListCard.module.css';

const MoviesListCard = ({movie}) => {
    const {
        id, poster_path, title, overview,
        genre_ids, vote_average, original_title
    } = movie;
    
    return (
        <div className={css.card_item}>
            <Link to={`movie/${id.toString()}`} state={id}>
                <Card>
                    <PosterPreview posterPath={poster_path}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{overview}</Card.Text>
                        <GenreBadge genreIds={genre_ids}/>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

export {MoviesListCard};