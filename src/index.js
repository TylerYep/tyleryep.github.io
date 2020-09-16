import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'

import { carouselData } from './x'
import { drawSVGLine } from './svg-draw'

const Bubble = React.forwardRef((props, ref) => {
  const shouldDisplay = props.index === 0 || props.index === props.dimensions.maxWidth ? 0 : ''
  const styles = {
    left: `${(props.index / props.dimensions.maxWidth * 100)}%`,
    height: shouldDisplay,
    width: shouldDisplay,
  }
  return props.image === 'marker' ? (
    <div
      id={`marker-${props.index}`}
      className="marker"
      ref={ref}
      title={props.text}
      data-tooltip={props.text}
      style={styles}
    ></div>
  ) : (
    <div
      id={props.image}
      ref={ref}
      className="bubble"
      onClick={props.openModal({ title: props.text, body: props.modalText })}
      style={styles}
    >
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
        <Bubble
          key={bubble.id}
          ref={props.refs[bubble.id]}
          openModal={props.openModal}
          dimensions={props.dimensions}
          {...bubble}
        />
      ))}
    </div>
  )
}

function ProjectModal(props) {
  return (
    <Modal show={props.displayModal} onHide={props.handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalContent.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.modalContent.body}</p>
      </Modal.Body>
    </Modal>
  )
}

function ProjectCarousel(props) {
  const [slideIndex, setSlideIndex] = React.useState(0)
  const [displayModal, setDisplayModal] = React.useState(false)
  const [modalContent, setModalContent] = React.useState({})
  const handleClose = () => setDisplayModal(false)
  const openModal = (content) => () => {
    setModalContent(content)
    setDisplayModal(true)
  }

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

  const [windowDimensions, setWindowDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions({
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
    // Remove all SVG elements
    for (const slide of document.getElementsByClassName('svg-canvas')) {
      slide.textContent = ''
    }

    for (const arrow of [
      ...document.getElementsByClassName('carousel-control-prev'),
      ...document.getElementsByClassName('carousel-control-next'),
    ]) {
      arrow.href = '#projects'
    }

    // Draw new SVG elements
    const slide = props.data[slideIndex]
    const canvasDOM = document.getElementById(`svg-canvas-${slide.year}`)
    slide.textContent = ''
    slide.connections.forEach(([start, end]) => {
      const slideRefs = refs[slide.year]
      for (const elem of [start, end]) {
        if (!(elem in slideRefs)) throw new Error(`Invalid carousel data id: ${elem}`)
      }
      canvasDOM.appendChild(drawSVGLine(slideRefs[start], slideRefs[end], windowDimensions))
    })
  })

  const dimensions = {}
  for (const carouselItemData of props.data) {
    dimensions[carouselItemData.year] = {
      maxHeight: carouselItemData.lanes.length,
      maxWidth: 0,
    }
    for (const arr of carouselItemData.lanes) {
      for (const bubble of arr) {
        if (bubble.index > dimensions[carouselItemData.year].maxWidth) {
          dimensions[carouselItemData.year].maxWidth = bubble.index
        }
      }
    }
  }

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
                <Lane
                  refs={refs[slide.year]}
                  key={i}
                  top={i === 0}
                  bubbles={lane}
                  openModal={openModal}
                  dimensions={dimensions[slide.year]}
                />
              ))}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <ProjectModal
        displayModal={displayModal}
        modalContent={modalContent}
        handleClose={handleClose}
      />
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
serviceWorker.register()
