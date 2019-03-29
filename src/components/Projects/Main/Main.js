import React, { Component } from 'react';
import NavBar from '../Nav/Nav.js';
import ThreeBackground from '../ThreeBackground/ThreeBackground.js';
import './Main.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ThreeBackground />
        {/* <div className="content">
          <content>
            <p>
              Hello, welcome to Timothy Li's personal site to showcase my
              passion in UI and rendering work. I am a full-stack developer that
              have built many different type of applications.
            </p>
            <p>
              Some of my projects were a NDA Inventory Management Application
              for a start-up in Seattle, a CMS site for a media company located
              in Lynnwood.
            </p>
            <p>
              I am especially passionate in 3D design and UI design for the web.
              The emergence of the Internet has shaped the foundation of reality
              itself and I believe that through visual designs and
              interactivity, I can also shape the way we interact with others.
              3D has always been a passion for me and which is why I decide to
              generate this background to enhance the experience of visiting my
              site. The navigation bar on the top showcases my projects and my
              passion for interactive UI designs, feel free to check them out.
            </p>
          </content>
        </div> */}
      </div>
    );
  }
}

export default Home;
