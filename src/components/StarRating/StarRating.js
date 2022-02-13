import React from 'react';
import ReactStars from "react-rating-stars-component/dist/react-stars";

const StarRating = ({ratingIMDB}) => {
    return (
        <div>
            <ReactStars
                count={10}
                edit={false}
                size={24}
                isHalf={true}
                value={ratingIMDB}
                activeColor={"#ffd700"}
            />
        </div>
    );
}

export {StarRating};