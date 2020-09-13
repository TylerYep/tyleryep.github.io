import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Carousel from 'react-bootstrap/Carousel'

import { carouselData } from './data'

const numMap = ['zero', 'one', 'two', 'three', 'four', 'five']

function Marker(props) {
  return (
    <div
      id={`marker-${props.index}`}
      className={`marker ${numMap[props.index]}`}
      data-toggle="tooltip"
      data-placement="top"
      title={props.text}
    ></div>
  )
}

function Bubble(props) {
  return (
    <div id="stanford" className={`bubble ${numMap[props.index]}`}>
      <img src={`img/projects/${props.image}`} alt={props.text} />
      <span className={`overlay ${props.color}`}>
      <p className="text">{props.text}</p>
      </span>
    </div>
  )
}

function Lane(props) {
  return (
    <div className={props.top ? 'lane top' : 'lane'}>
      {props.bubbles.map((bubble) => (
        (bubble.image === 'marker')
        ? <Marker key={bubble.index} {...bubble} />
        : <Bubble key={bubble.index} {...bubble} />
      ))}
    </div>
  )
}

function ProjectCarousel() {
  return (
    <Carousel id="project" interval={null}>
      {carouselData.map((slide) => (
        <Carousel.Item key={slide.year}>
          <h1>Projects</h1>
          <img src="img/projects/stars.jpg" alt="stars"></img>
          <Carousel.Caption>
            <h2 className="year">{slide.year}</h2>
            {slide.lanes.map((lane, i) => (
              <Lane key={i} top={i === 0} bubbles={lane} />
            ))}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

// TODO: Add <React.StrictMode> here when react bootstrap is ready.
ReactDOM.render(<ProjectCarousel />, document.querySelector('#projects'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
// TODO: re-enable cross origin checks in Safari
