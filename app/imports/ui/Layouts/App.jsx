import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import landing from '../pages/landing-page.html';

// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={landing} />
            </Switch>
          </div>
        </Router>
    );
  }
}