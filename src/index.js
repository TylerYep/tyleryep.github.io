import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Carousel from 'react-bootstrap/Carousel'

import { carouselData } from './data'

// TODO: add PropTypes
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
    <div id={props.image} className={`bubble ${numMap[props.index]}`}>
      <img src={`img/projects/${props.image}`} alt={props.text} />
      <span className={`overlay ${props.overlay}`}>
        <p className="text">{props.text}</p>
      </span>
    </div>
  )
}

function Lane(props) {
  return (
    <div className={props.top ? 'lane top' : 'lane'}>
      {props.bubbles.map((bubble) =>
        bubble.image === 'marker' ? (
          <Marker key={bubble.index} {...bubble} />
        ) : (
          <Bubble key={bubble.index} {...bubble} />
        ),
      )}
    </div>
  )
}

function CurvedLine(
  leftPos,
  rightPos,
  clientHeight,
  clientWidth,
  strokeColor = 'lightseagreen',
  strokeWidth = 10,
  tension = 0.6,
) {
  console.log(leftPos, rightPos)

  const x1 = leftPos.x * clientWidth / 5
  const y1 = leftPos.y * clientHeight / 5
  const x2 = rightPos.x * clientWidth / 5
  const y2 = rightPos.y * clientHeight / 5
  console.log(x1, y1)
  console.log(x2, y2)

  // const x1 = leftPos.x
  // const y1 = leftPos.y - distanceFromTop
  // const x2 = rightPos.x
  // const y2 = rightPos.y - distanceFromTop

  const delta = (x2 - x1) * tension
  const hx1 = x1 + delta
  const hy1 = y1
  const hx2 = x2 - delta
  const hy2 = y2
  const path = `M ${x1} ${y1} C ${hx1} ${hy1} ${hx2} ${hy2} ${x2} ${y2}`

  return (
    <path
      d={path}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      className="path"
      style={{ fill: 'none' }}
    ></path>
  )
}

// class ProjectCarousel extends React.Component {
//   constructor(props) {
//     super()


function createState(data) {
  let state = {}
  for (const carouselItemData of data) {
    state[carouselItemData.year] = {}
    for (const [row, laneArr] of carouselItemData.lanes.entries()) {
      for (const lane of laneArr) {
        state[carouselItemData.year][lane.id] = {x: lane.index, y: row + 1}
      }
    }
  }
  console.log(state)
  return state
}


function ProjectCarousel(props) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const state = React.useMemo(() => createState(props.data), [props.data]);
  return (
    <Carousel id="project" interval={10000}>
      {props.data.map((slide) => (
        <Carousel.Item key={slide.year}>
          <h1>Projects</h1>
          <svg className="svg-canvas">
            {slide.connections.map((connect) =>
              CurvedLine(
                state[slide.year][connect[0]],
                state[slide.year][connect[1]],
                dimensions.height,
                dimensions.width,
              )
            )}
          </svg>
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
ReactDOM.render(<ProjectCarousel data={carouselData} />, document.querySelector('#projects'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
