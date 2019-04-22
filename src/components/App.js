import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import Main from './Projects/Main/Main.js';
import GameScreen from './Projects/GameScreen/GameScreen.js';
import Map from './Projects/Map/Map.js';
import Conway from './Projects/ConwayScreen/ConwayScreen.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // What kind of inital state to we need?
    };
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Main} />
          <Route path="/projects/game" exact component={GameScreen} />
          <Route path="/projects/map" exact component={Map} />
          <Route path="/projects/conway" exact component={Conway} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
