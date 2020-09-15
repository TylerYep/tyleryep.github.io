import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Carousel from 'react-bootstrap/Carousel'

import { carouselData } from './data'
import { drawSVGLine, resetCanvases } from './drawing'
const numMap = ['zero', 'one', 'two', 'three', 'four', 'five']

const Bubble = React.forwardRef((props, ref) => {
  return props.image === 'marker' ? (
    <div
      id={`marker-${props.index}`}
      className={`marker ${numMap[props.index]}`}
      ref={ref}
      data-toggle="tooltip"
      data-placement="top"
      title={props.text}
    ></div>
  ) : (
    <div id={props.image} className={`bubble ${numMap[props.index]}`} ref={ref}>
      <img src={`img/projects/${props.image}`} alt={props.text} />
      <span className={`overlay ${props.overlay}`}>
        <p className="text">{props.text}</p>
      </span>
    </div>
  )
})

function Lane(props) {
  return (
    <div className={props.top ? 'lane top' : 'lane'}>
      {props.bubbles.map((bubble) => (
        <Bubble key={bubble.id} ref={props.refs[bubble.id]} {...bubble} />
      ))}
    </div>
  )
}

function ProjectCarousel(props) {
  const [slideIndex, setSlideIndex] = React.useState(0)
  const [refs] = React.useState(() => {
    let refs = {}
    for (const carouselItemData of props.data) {
      refs[carouselItemData.year] = {}
      for (const laneArr of carouselItemData.lanes) {
        for (const lane of laneArr) {
          if (lane.id === undefined)
            throw new Error(`Undefined carousel data id: ${JSON.stringify(lane)}`)
          if (lane.id in refs[carouselItemData.year])
            throw new Error(`Duplicate carousel data id: ${lane.id}`)
          refs[carouselItemData.year][lane.id] = React.createRef()
        }
      }
    }
    return refs
  })

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }
    window.addEventListener('resize', handleResize)
    return (_) => {
      window.removeEventListener('resize', handleResize)
    }
  })

  // code to run after render goes here
  React.useEffect(() => {
    resetCanvases()
    const slide = props.data[slideIndex]
    const canvasDOM = document.getElementById(`svg-canvas-${slide.year}`)
    slide.connections.forEach(([start, end]) => {
      const slideRefs = refs[slide.year]
      if (!(start in slideRefs)) throw new Error(`Invalid carousel data id: ${start}`)
      if (!(end in slideRefs)) throw new Error(`Invalid carousel data id: ${end}`)
      canvasDOM.appendChild(drawSVGLine(slideRefs[start], slideRefs[end], dimensions))
    })
  })

  return (
    <>
      <h1>Projects</h1>
      <Carousel id="project" interval={null} onSlide={setSlideIndex}>
        {props.data.map((slide) => (
          <Carousel.Item key={slide.year}>
            <svg id={`svg-canvas-${slide.year}`} className="svg-canvas"></svg>
            <img src="img/home/stars.jpg" alt="stars"></img>
            <Carousel.Caption>
              <h2 className="year">{slide.year}</h2>
              {slide.lanes.map((lane, i) => (
                <Lane refs={refs[slide.year]} key={i} top={i === 0} bubbles={lane} />
              ))}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

// TODO: Add <React.StrictMode> here when react bootstrap is ready.
ReactDOM.render(
  <>
    <ProjectCarousel data={carouselData} />
  </>,
  document.querySelector('#projects'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
