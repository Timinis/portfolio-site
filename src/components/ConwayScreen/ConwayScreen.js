import React, { Component } from 'react';
import NavBar from '../Nav/Nav.js';
import conwayRenderer from '../../conway/conwayRenderer.js';

class GameScreen extends Component {
  componentDidMount = () => {
    const canvas = document.getElementById('conway');
    conwayRenderer(canvas);
  };

  render() {
    return (
      <div>
        <NavBar />
        <canvas id="conway" />
        <p>Conway Game of Life is an automaton game.</p>
      </div>
    );
  }
}

export default GameScreen;
