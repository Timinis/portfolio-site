import React, { Component } from 'react';
import NavBar from '../Nav/Nav.js';
import conwayRenderer from '../../../conway/conwayRenderer.js';

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
        <h2>Intro</h2>
        <p>
          Conway's Game of Life is a 'cellular automaton' game that was invented
          by Cambridge mathetician John Conway. It consists of a collection of
          cells which, based on a few mathematical rules, can live, die or
          multiply. Depending on the initial conditions, the cells form various
          patterns throughout the course of the game. The basic survival of each
          cells is dependent on these conditions.
        </p>
        <ol>
          <li>
            Any live cell with fewer than two live neighbours dies, as if by
            underpopulation.
          </li>
          <li>
            Any live cell with two or three live neighbours lives on to the next
            generation.
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
        <h2>Tutorial</h2>
        <p>
          Press on the grids to make the cells "alive". Press R to start/resume
          the game. Press P to pause the game so that the board can be re-edited
          again. Then watch to watch the simulation happen.
        </p>
      </div>
    );
  }
}

export default GameScreen;
