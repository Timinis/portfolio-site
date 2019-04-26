import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import pong from '../../img/3d-pong.png';
import planet from '../../img/three.png';
import conway from '../../img/conway.png';
import excursion from '../../img/excursion.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.profileRef = null;
    this.experienceRef = null;
    this.languageRef = null;
    this.projectRef = null;
    this.contactRef = null;
  }

  scrollToMyRef = input => {
    switch (input) {
      case 'profile':
        window.scrollTo(0, this.profileRef.offsetTop);
        break;
      case 'experience':
        window.scrollTo(0, this.experienceRef.offsetTop);
        break;
      case 'language':
        window.scrollTo(0, this.languageRef.offsetTop);
        break;
      case 'project':
        window.scrollTo(0, this.projectRef.offsetTop);
        break;
      case 'contact':
        window.scrollTo(0, this.contactRef.offsetTop);
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
  };

  render() {
    return (
      <div className="placement">
        <div className="grid-container">
          <div className="home-nav">
            <nav>
              <button onClick={() => this.scrollToMyRef()}>Top</button>
              <button onClick={() => this.scrollToMyRef('profile')}>
                Profile
              </button>
              <button onClick={() => this.scrollToMyRef('experience')}>
                Experiences
              </button>
              <button onClick={() => this.scrollToMyRef('language')}>
                Languages
              </button>
              <button onClick={() => this.scrollToMyRef('project')}>
                Projects
              </button>
              <button onClick={() => this.scrollToMyRef('contact')}>
                Contact
              </button>
            </nav>
          </div>

          <div className="main">
            <div className="filter" />
            <div className="title">
              <h1>Timothy Li</h1>
              <h2>Interactive Resume</h2>
            </div>
            <div className="cover" />
            <div className="profile" ref={ref => (this.profileRef = ref)}>
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
            <div
              className="experiences"
              ref={ref => (this.experienceRef = ref)}
            >
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
                  client’s need for their upcoming event. I also developed a
                  Mobile app for an ongoing new project for the company. Used
                  React-Native as the primary tool for development.
                </p>

                <h4>Fly-Sorter- Contractor</h4>
                <h5>December 2019-December 2019</h5>

                <p>
                  My team and I developed a full-stack inventory management
                  system with Amazon Serverless Database, Lambda Functions, SQL,
                  and React. My main contribution was reverse engineering the
                  previous team's application and re-work it to better fit the
                  new frameworks we were using. I also was the main designer
                  behind the user interface for the site.
                </p>

                <h4>Farmers Insurance- Recruiter/Agency Consultant</h4>
                <h5>January 2018 - June 2018</h5>

                <p>
                  Some of my major tasks was to invite and helped candidates
                  determine their potential in the insurance industry. I helped
                  smaller agencies by giving them advices in regards to
                  operations and I also helped with sales at a local insurance
                  agent when they had a sudden leave of their employee.
                </p>

                <h4>Enterprise Rent-a-Car- Management Assistant</h4>
                <h5>August 2016 - January 2018</h5>

                <p>
                  I helped managed a local branch with 2 other managers and
                  managed fleet logistics of the branch. I was mainly the sales
                  guru in the branch and I was one of the top salesman in the
                  region and also mentored some of our newer employees to reach
                  to similar spots.
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
            <div className="languages" ref={ref => (this.languageRef = ref)}>
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
            <div className="projects" ref={ref => (this.projectRef = ref)}>
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
            <div className="contact" ref={ref => (this.contactRef = ref)}>
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
