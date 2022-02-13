import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
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
                className={css.wrap}
            >
                <div>
                    <Container>
                            <NavLink to={"/movies"}>Movies page</NavLink>
                    </Container>
                </div>
    
                <div>
                    <Container>
                        <Button variant={'secondary'} onClick={themeSwitch}>
                            {!darkMode ? "Dark mode" : "Light mode"}
                        </Button>
                        <UserInfo/>
                    </Container>
                </div>
                
            </Navbar>
            
            <div>
                <Outlet/>
            </div>
        </div>
);
}

export {Header};
