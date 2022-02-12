import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {getMovieById} from "../../store";

const MovieDetailsPage = () => {
    const {status, checkedFilm} = useSelector(state => state['moviesPageReducer']);
    // console.log(checkedFilm)
    const {id} = useParams();
    // console.log(id);
    
    // // const {id, original_title} = movie;
    const dispatch = useDispatch();
    //
    useEffect(() => {
        dispatch(getMovieById(id));
    }, [id]);
    
    return (
        <div>
            dsvsd
        </div>
    );
}

export {MovieDetailsPage};