import React, { Component } from 'react';
import '../../assets/css/mixin.scss';
import '../../assets/css/app.scss';
import NavBarBottom from '../../components/NavBarBottom/NavBarBottom';
import IndexShow from '../../pages/IndexShow/IndexShow';
import './Index.scss';
import UserInformation from '../../pages/UserInformation/UserInformation';
import { BrowserRouter, Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBarBottom></NavBarBottom>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
