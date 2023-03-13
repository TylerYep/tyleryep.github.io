import { carouselData as oldCarouselData } from './data'

const LANE_MAX = 4
const SLIDE_BREAK = 2
const carouselData = [
  {year: "2016 - 2018", lanes: [[], [], [], []], connections: []},
  {year: "2018 - 2023", lanes: [[], [], [], []], connections: []},
]
for (const [slide, carouselItemData] of oldCarouselData.entries()) {
  const addToSlide = slide < SLIDE_BREAK ? 0 : 1
  for (let i = 0; i < carouselItemData.lanes.length; i++) {
    for (const bubble of carouselItemData.lanes[i]) {
      carouselData[addToSlide].lanes[i].push(
        {
          ...bubble,
          id: `${bubble.id}-${slide}`,
          index:  bubble.index + (slide - (slide < SLIDE_BREAK ? 0 : SLIDE_BREAK)) * LANE_MAX
        }
      )
    }
  }

  for (const [start, end] of carouselItemData.connections) {
    carouselData[addToSlide].connections.push(
      [
        `${start}-${slide}`,
        `${end}-${slide}`,
      ]
    )
  }
}

export { carouselData }
