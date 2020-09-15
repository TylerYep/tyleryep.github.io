import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Carousel from 'react-bootstrap/Carousel'

import { carouselData } from './data'

// TODO: add PropTypes
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
  const { refs } = props
  return (
    <div className={props.top ? 'lane top' : 'lane'}>
      {props.bubbles.map((bubble) => (
        <Bubble key={bubble.index} ref={refs[bubble.id]} {...bubble} />
      ))}
    </div>
  )
}

function drawSVGLine(
  leftRef,
  rightRef,
  dimensions,
  strokeColor = 'lightseagreen',
  strokeWidth = 10,
  tension = 0.6,
) {
  function findAbsolutePosition(htmlElement) {
    let x = 0
    let y = 0
    for (let el = htmlElement; el != null; el = el.offsetParent) {
      x += el.offsetLeft
      y += el.offsetTop
    }
    return { x: x, y: y }
  }
  const leftPos = findAbsolutePosition(leftRef.current)
  const rightPos = findAbsolutePosition(rightRef.current)

  // Projects page is 3rd from the top
  const distanceFromTop = 3 * dimensions.height
  const x1 = leftPos.x
  const y1 = leftPos.y - distanceFromTop
  const x2 = rightPos.x
  const y2 = rightPos.y - distanceFromTop

  const delta = (x2 - x1) * tension
  const hx1 = x1 + delta
  const hy1 = y1
  const hx2 = x2 - delta
  const hy2 = y2
  const path = `M ${x1} ${y1} C ${hx1} ${hy1} ${hx2} ${hy2} ${x2} ${y2}`

  const namespace = 'http://www.w3.org/2000/svg'
  const shape = document.createElementNS(namespace, 'path')
  shape.setAttribute('d', path)
  shape.setAttribute('stroke', strokeColor)
  shape.setAttribute('class', 'path')
  shape.setAttribute('style', 'fill: none;')
  shape.setAttribute('stroke-width', strokeWidth)
  return shape
}

function resetAllCanvases() {
  const carouselSlides = document.getElementsByClassName('carousel-item')
  for (let i = 0; i < carouselSlides.length; i++) {
    const svg = carouselSlides[i].getElementsByClassName('svg-canvas')[0]
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild)
    }
  }
}

function ProjectCarousel(props) {
  const [refs] = React.useState(() => {
    let refs = {}
    for (const carouselItemData of props.data) {
      refs[carouselItemData.year] = {}
      for (const laneArr of carouselItemData.lanes) {
        for (const lane of laneArr) {
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
    resetAllCanvases()
    const slide = props.data[0]
    const canvasDOM = document.getElementById(`svg-canvas-${slide.year}`)
    slide.connections.forEach((connect) => {
      const from = refs[slide.year][connect[0]]
      const to = refs[slide.year][connect[1]]
      canvasDOM.appendChild(drawSVGLine(from, to, dimensions))
    })
  })

  return (
    <Carousel id="project" interval={null}>
      {props.data.map((slide) => (
        <Carousel.Item key={slide.year}>
          <h1>Projects</h1>
          <svg id={`svg-canvas-${slide.year}`} className="svg-canvas"></svg>
          <img src="img/projects/stars.jpg" alt="stars"></img>
          <Carousel.Caption>
            <h2 className="year">{slide.year}</h2>
            {slide.lanes.map((lane, i) => (
              <Lane refs={refs[slide.year]} key={i} top={i === 0} bubbles={lane} />
            ))}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

// TODO: Add <React.StrictMode> here when react bootstrap is ready.
ReactDOM.render(<ProjectCarousel data={carouselData} />, document.querySelector('#projects'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
