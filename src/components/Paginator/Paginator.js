import React from 'react';
import {ButtonGroup, Button} from "react-bootstrap";

const Paginator = ({toNextPage, toPrevPage, page}) => {
    
    return (
        <ButtonGroup size={"md"}>
            {
                page !== 1 ? <Button variant={"secondary"} onClick={toPrevPage}> Prev page</Button> : ''
            }
            
            <Button variant={"secondary"} disabled={"disabled"}>{page}</Button>
            <Button variant={"secondary"} onClick={toNextPage}> Next page</Button>
        </ButtonGroup>
    );
}

export {Paginator};