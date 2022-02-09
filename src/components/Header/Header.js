import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import {UserInfo} from "../UserInfo/UserInfoPage";

const Header = () => {
    return (
        <div>
            <div>
                <NavLink to={"/movies"}>Movies page</NavLink>
                <UserInfo />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export {Header};