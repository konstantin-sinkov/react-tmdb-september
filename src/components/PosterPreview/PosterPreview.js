import React from 'react';
import {Card} from "react-bootstrap";

const PosterPreview = ({posterPath}) => {
    return (
        <div>
            <Card.Img variant={"top"} src={`https://image.tmdb.org/t/p/w300${posterPath}`} />
        </div>
    );
}

export {PosterPreview};