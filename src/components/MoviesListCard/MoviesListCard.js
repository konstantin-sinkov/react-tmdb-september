import React from 'react';
import {Link} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {id, original_title} = movie;
    return (
        <div>
            <Link to={id.toString()}>
                {id} -- {original_title}
            </Link>
        </div>
    );
}

export {MoviesListCard};