import React, {Component} from 'react'
import {Router, Route, Link, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import asyncComponent from './asyncComponent';
import index from '../pages/IndexShow/IndexShow';
import userInformation from '../pages/UserInformation/UserInformation';
import indexShow from '../pages/IndexShow/IndexShow';
// const index = asyncComponent(() => import("../pages/Index/Index"));
// const userInformation = asyncComponent(() => import("../pages/UserInformation/UserInformation"));




export default class RouteConfig extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/profile" exact component= {profile}/>
          <Route path="/login" component= {login}/>
          <Route path="/info"  component= {info}/>
          <Route path="/msite" component= {msite}/>
          <Route path="/setuser"  component= {setUser}/>
          <Route path="/shop/:id"  component= {shop}/>
          <Route path="/food/:geohash/:id/:title"  component= {food}/>
          <Route path="/technology"  component= {technology}/> */}
          {/* <Redirect exact from='/' to='/profile'/> */}
          <Route path="/1" component= {indexShow}/>
          <Route path="/22" component = {userInformation}/>
        </Switch>
      </BrowserRouter>
    )
  }
}



