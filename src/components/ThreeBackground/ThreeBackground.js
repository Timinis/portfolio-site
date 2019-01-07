import React, { Component } from 'react';
import backgroundRender from '../../background/backgroundRender';

class ThreeBackground extends Component {
  componentDidMount() {
    const canvas = document.getElementById('background');
    backgroundRender(canvas);
  }

  render() {
    return (
      <div>
        <canvas id="background" />
      </div>
    );
  }
}

export default ThreeBackground;
