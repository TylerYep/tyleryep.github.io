import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Carousel from "react-bootstrap/Carousel";

function Bubble() {
  return (
    <div id="stanford" className="bubble one">
      <img src="img/projects/stanford.jpg" alt="Stanford" />
      <span className="overlay red">
        <p className="text">Stanford</p>
      </span>
    </div>
  );
}

function Lane(props) {
  return (
    <div className={props.top ? "lane top" : "lane"}>
      {props.bubbles.map((bubble) => (
        <Bubble key={bubble} />
      ))}
    </div>
  );
}

function ProjectCarousel() {
  return (
    <Carousel id="project" interval={null}>
      {[0, 1, 2].map((num) => (
        <Carousel.Item key={num}>
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

// TODO: Add <React.StrictMode> here when react bootstrap is
ReactDOM.render(<ProjectCarousel />, document.querySelector("#projects"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// TODO: re-enable cross origin checks in Safari
