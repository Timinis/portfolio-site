import React, { Component } from 'react';
import NavBar from '../Nav/Nav.js';
import conwayRenderer from '../../../conway/conwayRenderer.js';
import './ConwayScreen.scss';

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
        <di class="text">
          <h2>Introduction to the Conway's Game of Life</h2>
          <p>
            Conway's Game of Life is a 'cellular automaton' game that was
            invented by Cambridge mathetician John Conway. It consists of a
            collection of cells which, based on a few mathematical rules, can
            live, die or multiply. Depending on the initial conditions, the
            cells form various patterns throughout the course of the game. The
            basic survival of each cells is dependent on these conditions.
          </p>
          <ol>
            <li>
              Any live cell with fewer than two live neighbours dies, as if by
              underpopulation.
            </li>
            <li>
              Any live cell with two or three live neighbours lives on to the
              next generation.
            </li>
            <li>
              Any dead cell with exactly three live neighbours becomes a live
              cell, as if by reproduction.
            </li>
            <li>
              Any live cell with more than three live neighbours dies, as if by
              overpopulation.
            </li>
          </ol>
          <h2>Tutorial to the Game</h2>
          <p>
            Press on the grids to make the cells "alive". Press R to
            start/resume the game. Press P to pause the game so that the board
            can be re-edited again. Then watch to watch the simulation happen.
          </p>
        </di>
      </div>
    );
  }
}

export default GameScreen;
