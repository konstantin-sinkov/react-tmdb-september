import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MoviesListCard = ({movie}) => {
    const {id, poster_path, title,overview,
           genre_ids, vote_average, original_title} = movie;
    
    return (
        <div>
            <Link to={`movie/${id.toString()}`} state={id}>
                <div className={'col-md-3'}>
                    <Card>
                        <PosterPreview posterPath={poster_path} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{overview}</Card.Text>
                            <GenreBadge genreIds={genre_ids} />
                        </Card.Body>
                        
                    </Card>
                </div>
            </Link>
        </div>
    );
}

export {MoviesListCard};