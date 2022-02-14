import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

import {UserInfo} from '../index';
import css from './Header.module.css';
import {switchTheme} from "../../store/theme.slice";

const Header = () => {
    const {darkMode} = useSelector(state => state['themeReducer']);
    const dispatch = useDispatch();
    
    const themeSwitch = () => {
        dispatch(switchTheme());
    }
    
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
                            <NavLink to={"/movies"}>Movies page</NavLink>
                            {/*DropdownGenres*/}
                    </Nav>
                    
                    
                    <Nav>
                        <Button variant={'secondary'} onClick={themeSwitch} >
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
