import React, { Component } from 'react';
import NavBar from '../Nav/Nav.js';
import gameRender from '../../game/gameRender.js';

class GameScreen extends Component {
  componentDidMount() {
    const canvas = document.getElementById('game');
    gameRender(canvas);
  }

  render() {
    return (
      <div>
        <NavBar />
        <canvas id="game" />
      </div>
    );
  }
}

export default GameScreen;
