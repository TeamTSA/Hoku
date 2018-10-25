import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
        <div className="container">
          <header>
            <h1>This is our app</h1>
          </header>
        </div>
        // when we get pages, this will change to router.
    );
  }
}