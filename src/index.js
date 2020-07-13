import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Carousel from "react-bootstrap/Carousel";

class Bubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="stanford" className="bubble one">
        <img src="img/projects/stanford.jpg" alt="Stanford" />
        <span className="overlay red">
          <p className="text">Stanford</p>
        </span>
      </div>
    );
  }
}

class Lane extends React.Component {
  render() {
    return (
      <div className={this.props.top ? "lane top" : "lane"}>
        {this.props.bubbles.map((bubble) => (
          <Bubble/>
        ))}
      </div>
    );
  }
}

class ProjectCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [1, 2, 3, 4],
    };
  }

  render() {
    return (
      <Carousel id="project">
          {this.state.slides.map(num => (
            <Carousel.Item>
              <h1>Projects</h1>
              <img src="img/projects/stars.jpg" alt="stars"></img>
              <Carousel.Caption>
                <h2 className="year">201{num}</h2>
                <Lane top bubbles={[1, 2]} />
                <Lane bubbles={[3]} />
                <Lane bubbles={[]} />
                <Lane bubbles={[]} />
              </Carousel.Caption>
            </Carousel.Item>
          ))}

      </Carousel>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ProjectCarousel />
  </React.StrictMode>,
  document.querySelector("#projects")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// TODO: re-enable cross origin checks in Safari

/*
        <div className="lane top">
          <div id="edutech" className="bubble two">
            <img src="img/projects/edutech.jpg" alt="EduTech"></img>
            <span className="overlay green">
              <p className="text">EduTech</p>
            </span>
          </div>
        </div>

        <div className="lane">
          <div id="stanford" className="bubble one">
            <img src="img/projects/stanford.jpg" alt="Stanford"></img>
            <span className="overlay red">
              <p className="text">Stanford</p>
            </span>
          </div>
          <div id="openproof" className="bubble four">
            <img src="img/projects/openproof.jpg" alt="Openproof"></img>
            <span className="overlay green">
              <p className="text">Openproof</p>
            </span>
          </div>
          <div id="marker-0" className="marker zero"></div>
          <div
            id="marker-1"
            className="marker two"
            data-toggle="tooltip"
            data-placement="top"
            title="Winter Quarter"
          ></div>
          <div
            id="marker-2"
            className="marker three"
            data-toggle="tooltip"
            data-placement="top"
            title="Spring Quarter"
          ></div>
          <div id="marker-5" className="marker five"></div>
        </div>

        <div className="lane"></div>

        <div className="lane">
          <div id="cs198" className="bubble three">
            <img src="img/projects/cs198.png" alt="CS 198"></img>
            <span className="overlay blue">
              <p className="text">CS198</p>
            </span>
          </div>
          <div
            id="marker-4"
            className="marker four"
            data-toggle="tooltip"
            data-placement="top"
            title="Summer Quarter"
          ></div>
          <div id="marker-6" className="marker five"></div>
        </div>

*/
