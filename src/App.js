import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import UsersAvailable from './usersList/UsersAvailable';
import UserDetail from './usersList/UserDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UsersAvailable}></Route>
        <Route path="/userData/:id" exact component={UserDetail}></Route>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
