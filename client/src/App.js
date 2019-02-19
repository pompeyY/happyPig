import React, { Component } from 'react';
import './assets/css/mixin.scss';
import NavBarBottom from './components/NavBarBottom/NavBarBottom';
import IndexShow from './pages/IndexShow/IndexShow';
import './App.css';
// import {Router, Route, Link} from 'react-router';
// import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
            <div className="App">
            <IndexShow></IndexShow>
            <NavBarBottom></NavBarBottom>
            </div>
    );
  }
}

export default App;
