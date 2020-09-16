const lanes = []
for (let i = 0; i < 5; i++) {
  let leet = []
    for (let j = 0; j < 7; j++) {
      let lane = {
        id: `${i}${j}`,
        index: j,
        image: 'stanford2.jpg',
        overlay: 'red',
        text: `${i}${j}`,
      }
      leet.push(lane)
    }
    lanes.push(leet)
}


const x = {
  year: 2017,
  lanes: lanes,
  connections: [
    // ['openproof', 'marker-3'],
  ],
}


console.log(x)
export const carouselData = [
  x, x, x,
]
