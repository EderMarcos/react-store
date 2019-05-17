import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home'
import About from '../Pages/About'
import Error from '../Pages/Error'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about-us" component={ About } />
          <Route component={ Error } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
