import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {getMovieById} from "../../store";
import {Card, Button} from "react-bootstrap";

const MovieDetailsPage = () => {
    const {status, checkedFilm} = useSelector(state => state['moviesPageReducer']);
    const {id} = useParams();
    
    const dispatch = useDispatch();
    //
    useEffect(() => {
        dispatch(getMovieById(id));
    }, [id]);
    
    return (
        <div>
            {checkedFilm === null ? '' :
                <Card>
                    <Card.Img variant={'top'} src={`https://image.tmdb.org/t/p/w500${checkedFilm.poster_path}`}/>
                    <Card.Body>
                        <Card.Title>Title: {checkedFilm.title}</Card.Title>
                        <Card.Subtitle>Original title: {checkedFilm.original_title}</Card.Subtitle>
                        <Card.Text>{checkedFilm.overview}</Card.Text>
                        <Card.Text>
                            Movie budget - {`${checkedFilm.budget / 1000000} mln USD`}
                        </Card.Text>
                        <Button variant={'link'}><Card.Link href={`https://www.imdb.com/title/${checkedFilm.imdb_id}`}>watch on ImDb</Card.Link></Button>
                    </Card.Body>
                </Card>
            }
        </div>
    );
}

export {MovieDetailsPage};