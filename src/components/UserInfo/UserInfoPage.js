import React from 'react';
import {Navbar} from "react-bootstrap";

import './UserInfo.css';

const UserInfo = () => {
    return (
        <Navbar.Text className={"user_block"}>
            Signed in as: <a href="#">Tyler Durden</a>
            <img src={"https://i.pinimg.com/736x/31/9f/48/319f484adfb7e8ab53cdc63cc962fd88.jpg"} alt={"User avater"}/>
        </Navbar.Text>
    );
}

export {UserInfo};