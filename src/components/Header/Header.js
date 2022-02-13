import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import {UserInfo} from "../UserInfo/UserInfoPage";
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg={"light"} variant={"light"}>
                <Container>
                    <Nav.Link>
                        <NavLink to={"/movies"}>Movies page</NavLink>
                    </Nav.Link>
                </Container>
                <UserInfo/>
            </Navbar>
            <div>
                <Outlet/>
            </div>
        </div>
);
}

export
    {
        Header
    }
;
