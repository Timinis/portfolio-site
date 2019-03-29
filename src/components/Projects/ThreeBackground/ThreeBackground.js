import React, { Component } from 'react';
import backgroundRender from '../../../background/backgroundRender';
import './ThreeBackground.scss';
class ThreeBackground extends Component {
  componentDidMount() {
    const canvas = document.getElementById('background');
    backgroundRender(canvas);
  }

  render() {
    return (
      <div className="background">
        <canvas id="background" />
      </div>
    );
  }
}

export default ThreeBackground;
