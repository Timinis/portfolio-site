import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import GameScreen from './GameScreen/GameScreen.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // What kind of inital state to we need?
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/game" exact component={GameScreen} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
