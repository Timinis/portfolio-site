import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="placement">
        <div className="grid-container">
          <div className="home-nav">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <a href="https://www.linkedin.com/in/timothy-li-052774107/">
                LinkedIn
              </a>
            </nav>
          </div>

          <div className="main">
            <h1>Timothy Li</h1>
            <h2>Full-Stack Developer</h2>

            <p>
              Former salesman and a finance guy. I started my journey in web
              design after experiencing the joy of self expression through
              website design and engineering.
            </p>
            <p>
              I am especially passionate in 3D design and UI design for the web.
              The emergence of the Internet has shaped the foundation of reality
              itself and I believe that through visual designs and
              interactivity, I can also shape the way we interact with others.
              The project tab on the top showcases my projects and my passion
              for interactive UI designs, feel free to check them out.
            </p>
          </div>
          <img
            src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/52033748_10219280971237539_1245972808593309696_o.jpg?_nc_cat=102&_nc_ht=scontent-sea1-1.xx&oh=0e6fdfe31a63cd4f8aa0520f8cf1732b&oe=5D156E46"
            alt="my linked in thumbnail"
          />
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Express</li>
            <li>WebGL- ThreeJS</li>
            <li>MapBox</li>
            <li>Sales</li>
          </ul>
          <div className="contact">
            <div className="contact-phone">
              <h3>Phone Number</h3>
              <h4>425-615-4810</h4>
            </div>
            <div className="contact-email">
              <h3>Email Address</h3>
              <h4>litimc3@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
