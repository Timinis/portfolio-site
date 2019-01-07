import React, { Component } from 'react';
import NavBar from '../Nav/Nav.js';
import ThreeBackground from '../ThreeBackground/ThreeBackground.js';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ThreeBackground />
      </div>
    );
  }
}

export default Home;
