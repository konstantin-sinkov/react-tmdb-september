import React from 'react';
import spinnerLoader from '../../assets/loader/spinner_loader.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinnerLoader} alt={"Loading data"}/>
            <h1>Fetching data</h1>
        </div>
    );
}

export {Loader};