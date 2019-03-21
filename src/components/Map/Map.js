import React, { Component } from 'react';
import NavBar from '../Nav/Nav.js';
import * as Mapbox from 'mapbox-gl';

class Map extends Component {
  componentDidMount() {
    Mapbox.accessToken =
      'pk.eyJ1IjoidGltbGkxMjM0IiwiYSI6ImNqc3czZHM4ajBkbTkzeXFqemY1c3dkdTIifQ.bcwTGk-K8GhFbS4K6Wmbgw';
    let map = new Mapbox.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [120.30529657298644, 22.663165013386205],
      zoom: 15.99,
      pitch: 40,
      bearing: 0
    });
    map.on('load', function() {
      // Insert the layer beneath any symbol layer.
      var layers = map.getStyle().layers;

      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer(
        {
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });

    this.map = map;
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: '0',
      bottom: 0,
      width: '100%',
      zIndex: -1
    };

    return (
      <div>
        <NavBar />
        <div style={style} ref={el => (this.mapContainer = el)} />
      </div>
    );
  }
}

export default Map;
