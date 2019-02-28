import React, {Component} from 'react'
import {Router, Route, Link, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import asyncComponent from './asyncComponent';
import UserInformation from '../pages/UserInformation/UserInformation';
import UserRegist from '../pages/UserRegist/UserRegist';
const Home = asyncComponent(() => import('../pages/Index/Index'));
const AddProduct = asyncComponent(() => import('../pages/AddProduct/AddProduct'));
const PersonalData = asyncComponent(() => import('../pages/PersonalData/PersonalData'));
const SoldOut = asyncComponent(() => import('../pages/SoldOut/SoldOut'));
const Unsold = asyncComponent(() => import('../pages/Unsold/Unsold'));
const UserLogin = asyncComponent(() => import('../pages/UserLogin/UserLogin'));




export default class RouteConfig extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path="/addProduct" component= {AddProduct}/>
          <Route path='/personalData' component= {PersonalData}></Route>
          <Route path='/soldOut' component= {SoldOut}></Route>
          <Route path='/unsold' component= {Unsold}></Route>
          <Route path='/user/regist' component= {UserRegist}></Route>
          <Route path='/user/login' component= {UserLogin}></Route>
          <Redirect to='/home/index' component= {UserLogin}></Redirect>
        </Switch>
      </BrowserRouter>
    )
  }
}



