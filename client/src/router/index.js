import React, {Component} from 'react'
import {Router, Route, Link, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import asyncComponent from './asyncComponent';
const Home = asyncComponent(() => import('../pages/Index/Index'));
const AddProduct = asyncComponent(() => import('../pages/AddProduct/AddProduct'));
const PersonalData = asyncComponent(() => import('../pages/PersonalData/PersonalData'));
const SoldOut = asyncComponent(() => import('../pages/SoldOut/SoldOut'));
const Unsold = asyncComponent(() => import('../pages/Unsold/Unsold'));




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
          <Redirect to='/home/index' ></Redirect>
        </Switch>
      </BrowserRouter>
    )
  }
}



