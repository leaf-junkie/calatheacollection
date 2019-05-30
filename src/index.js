import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/' component={App} />
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
