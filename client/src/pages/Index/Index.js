import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import './Index.scss';
import '../../assets/css/mixin.scss';
import '../../assets/css/app.scss';
import '../../assets/iconfont/iconfont.css';

import UserInformation from '../../pages/UserInformation/UserInformation';
import NavBarBottom from '../../components/NavBarBottom/NavBarBottom';
import IndexShow from '../IndexShow/IndexShow';
import Classify from '../Classify/Classify';
import Find from '../Find/Find';

class App extends Component {
  render() {
    return (
            <div className="App">
                {/* <Route path='/home/0' component={IndexShow}></Route> */}
                <Switch>
                    <Route path='/home/index' component={IndexShow}></Route>
                    <Route path='/home/classify' component={Classify}></Route>
                    <Route path='/home/find' component={Find}></Route>
                    <Route path='/home/my' component={UserInformation}></Route>
                    <Redirect to='/home/index'></Redirect>
                </Switch>
                
                <NavBarBottom></NavBarBottom>
            </div>
    );
  }
}

export default App;
