import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';

import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/gallery' component={Gallery} />
        </App>
    </BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
