import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './router/index';
import App from './pages/Index/Index';
import * as serviceWorker from './serviceWorker';

const render = Component => {
    ReactDOM.render(<App><Component></Component></App>, document.getElementById('root'));
}

render(Route);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
