import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

import {UserInfo} from '../index';
import {switchTheme} from "../../store/theme.slice";
import {setCheckedGenreId} from "../../store";
import './Header.css';

const Header = () => {
    const {checkedGenreId, genres} = useSelector(state => state['moviesPageReducer']);
    const {darkMode} = useSelector(state => state['themeReducer']);
    const dispatch = useDispatch();
    
    const themeSwitch = () => {
        dispatch(switchTheme());
    }
    
    const handleChange = (e) => {
        e.preventDefault();
        dispatch(setCheckedGenreId(e.target.value))
        // console.log(genreID);
    }
    
    // const getMoviesByGenreId = (checkedGenreId) => {
    //     dispatch(setCheckedGenreId())
    // }
    
    // const name = '';
    
    return (
        <div>
            <Navbar
                bg={!darkMode ? "light" : "dark"}
                variant={!darkMode ? "light" : "dark"}
                className={"me-auto my-2 my-lg-0"}
                style={{maxHeight: '100px'}}
            >
                <Container>
                    <Navbar.Brand href={"https://www.themoviedb.org/?language=uk"}>TMDB</Navbar.Brand>
                    
                    <Nav className={"me-auto"}>
                        <NavLink to={"/movies"} className={"page_link"}>Movies page</NavLink>
                        {/*Dropdown for Genres*/}
                        <NavDropdown title={"By genre"} onChange={handleChange} value={''}>
                            {
                                genres.map(genre =>
                                    <div>
                                        <NavLink
                                            key={genre.id}
                                            to={`movies/genre/${genre.id}`}
                                            state={genre.id}
                                        >
                                            {genre.name}
                                        </NavLink>
                                    </div>
                                )
                            }
                        </NavDropdown>
                    </Nav>
                    
                    <Nav>
                        <Button variant={'secondary'} onClick={themeSwitch} className={"darkMode_button"}>
                            {!darkMode ? "Dark mode" : "Light mode"}
                        </Button>
                        <UserInfo/>
                    </Nav>
                </Container>
            </Navbar>
            
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export {Header};

// with react-bootstrap component
// {genres.map(genre =>
//     <NavDropdown.Item
//         key={genre.id}
//         onSelect={() => dispatch(setCheckedGenreId(genre.id))}
//     >
//         {genre.name}
//     </NavDropdown.Item>)
// }
