import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import GameScreen from './GameScreen/GameScreen.js';
import Map from './Map/Map.js';
import Conway from './ConwayScreen/ConwayScreen.js';

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
          <Route path="/map" exact component={Map} />
          <Route path="/conway" exact component={Conway} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
