import React from 'react';
import {useSelector} from "react-redux";

import GenreBadgeItem from "../GenreBadgeItem/GenreBadgeItem";
import css from './GenreBadge.module.css';

const GenreBadge = ({genreIds}) => {
    const {genres} = useSelector(state => state['moviesPageReducer']);
    
    let movieGenres = [];
    
    for (const genre of genres) {
        for (let i = 0; i < genres.length; i++) {
           if (genre.id === genreIds[i]) {
               movieGenres.push(genre.name);
           }
       }
    }
    
    // console.log(movieGenres);
    
    return (
        <div className={css.genreBadge_wrapper}>
            {
                movieGenres.map(genre =>
                    <GenreBadgeItem
                        key={new Date().getTime() + Math.random()*1000}
                        genre={genre}
                    />)
            }
        </div>
    );
}

export {GenreBadge};