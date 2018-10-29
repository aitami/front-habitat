import React from 'react';
import ReactDOM from 'react-dom';
import BaseStyles from './assets/styles'
import Auth from './components/Auth/auth';

const render = () => {
    BaseStyles();

    ReactDOM.render(
        <Auth />, 
        document.getElementById('root')
    );

}

render();
