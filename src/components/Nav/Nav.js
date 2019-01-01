import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
      </nav>
    );
  }
}

export default NavBar;
