import React from 'react';
import {Badge} from "react-bootstrap";

const GenreBadgeItem = ({genre}) => {
    
    return (
        <h6>
            <Badge color="secondary">{genre}</Badge>
        </h6>
    );
}

export default GenreBadgeItem;