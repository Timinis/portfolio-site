import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class NavBar extends Component {
  render() {
    return (
      <nav className="project-nav">
        <Link to="/">Home</Link>
        <Link to="/projects">ThreeJS</Link>
        <Link to="/projects/game">Game</Link>
        <Link to="/projects/map">Home Town</Link>
        <Link to="/projects/conway">Cellular Simulation</Link>
      </nav>
    );
  }
}

export default NavBar;
