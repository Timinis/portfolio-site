import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import pong from '../../img/3d-pong.png';
import planet from '../../img/three.png';
import conway from '../../img/conway.png';
import excursion from '../../img/excursion.png';

class Home extends Component {
  render() {
    return (
      <div className="placement">
        <div className="grid-container">
          <div className="home-nav">
            <nav>
              <a>Profile</a>
              <a>Experiences</a>
              <a>Languages</a>
              <a>Projects</a>
              <a>Contact</a>
            </nav>
          </div>

          <div className="main">
            <div className="filter" />
            <div className="title">
              <h1>Timothy Li</h1>
              <h2>Interactive Resume</h2>
            </div>
            <div className="cover" />
            <div className="profile">
              <div className="profile-title">
                <h1>Profile</h1>
                <h2>Full-Stack Web Developer</h2>
              </div>
              <div className="profile-about">
                <h3>About me</h3>
                <p>
                  Former salesman and a finance guy. I started my journey in web
                  design after experiencing the joy of self expression through
                  website design and engineering. I am especially passionate in
                  3D design and UI design for the web.
                </p>
              </div>
              <img
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/52033748_10219280971237539_1245972808593309696_o.jpg?_nc_cat=102&_nc_ht=scontent-sea1-1.xx&oh=0e6fdfe31a63cd4f8aa0520f8cf1732b&oe=5D156E46"
                alt="Timothy Li's Profile"
              />
              <div className="profile-details">
                <h3>Details</h3>
                <ul>
                  <li>
                    Name: <br /> Timothy Li
                  </li>
                  <li>
                    Title: <br /> Full-Stack Developer
                  </li>
                  <li>
                    Location: <br /> Greater Seattle, Washington
                  </li>
                </ul>
              </div>
            </div>
            <div className="experiences">
              <div className="experiences-title">
                <h1>Experiences</h1>
                <h2>
                  “Good judgment comes from experience, and experience comes
                  from bad judgment.” <br /> ― Rita Mae Brown, Alma Mater
                </h2>
              </div>
              <div className="experiences-careers">
                <h3>Careers</h3>
                <h4>Sovereign Wealth Fund Institute- Contractor</h4>
                <h5>January 2019-March 2019</h5>

                <p>
                  Developed a full-stack CMS site to the company’s event site.
                  Used frameworks such as React, and Express to help reached the
                  client’s need for their upcoming event. Developed a Mobile app
                  for an ongoing new project for the company. Used React-Native
                  as the primary tool for development.
                </p>

                <h4>Fly-Sorter- Contractor</h4>
                <h5>December 2019-December 2019</h5>

                <p>
                  We developed a full-stack IMS with Amazon Serverless Database,
                  Lambda Functions, SQL, and React. We integrated another team’s
                  code base and reverse engineered their code base so that the
                  interface better suited our clients.
                </p>

                <h4>Farmers Insurance- Recruiter/Agency Consultant</h4>
                <h5>January 2018 - June 2018</h5>

                <p>
                  Invited and helped candidates determine their potential in the
                  insurance industry. Helped with sales at a local insurance
                  branch when they had a sudden need for salesman.
                </p>

                <h4>Enterprise Rent-a-Car- Management Assistant</h4>
                <h5>August 2016 - January 2018</h5>

                <p>
                  Helped managed a local branch and managed fleet logistics of
                  the branch. Mentored some of the top salesmans in our region
                  and was ranked 1st when I left.
                </p>
              </div>
              <div className="experiences-education">
                <h3>Educations</h3>
                <h4>Code Fellows</h4>
                <h5>Seattle, Wa</h5>
                <p>
                  Certificate - Advanced Software Development in Full-Stack
                  JavaScript
                </p>
                <h4>University of Washington</h4>
                <h5>Bothell, Wa</h5>
                <p>B.S - Business Admin Finance </p>
              </div>
            </div>
            <div className="languages">
              <h1>Languages and Tools</h1>
              <h2>
                "Anyone who stops learning is old, whether at twenty or eighty.”
                <br />
                -Henry Ford
              </h2>
              <ul>
                <li>JavaScript</li>
                <li>Java-Beginner</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>React</li>
                <li>Redux</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Amazon Web Service</li>
                <li>Amazon Azure</li>
                <li>Serverless Cloud</li>
                <li>WebGL- ThreeJS</li>
              </ul>
            </div>
            <div className="projects">
              <h1>Projects</h1>
              <h2>
                “You can do anything you set your mind to.” <br /> - Benjamin
                Franklin
              </h2>
              <div className="image-list">
                <Link to="/projects">
                  <img src={planet} alt="planet with 3js" />
                  <h4>Planet Orbit</h4>
                </Link>
                <Link to="/projects/game">
                  <img src={pong} alt="pong with 3js" />
                  <h4>3D Pong</h4>
                </Link>

                <Link to="/projects/conway">
                  <img src={conway} alt="conway with canvas" />
                  <h4>Conway's Game of Life</h4>
                </Link>
                <div className="animal">
                  <a href="http://www.animal-excursion.fun/">
                    <img
                      src={excursion}
                      alt="animal-excursion"
                      href="http://www.animal-excursion.fun/"
                    />

                    <h4>Animal Excursion</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact">
              <h1>Contact</h1>
              <h2>
                “If I had asked people what they wanted, they would have said
                faster horses. ”
                <br />- Henry Ford
              </h2>
              <a href="https://www.linkedin.com/in/timothy-li-052774107/">
                LinkedIn
              </a>
              <a href="https://github.com/Timinis">GitHub</a>
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
      </div>
    );
  }
}

export default Home;
