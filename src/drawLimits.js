const lanes = []
for (let i = 0; i < 4; i++) {
  let leet = []
    for (let j = 0; j < 10; j++) {
      let lane = {
        id: `${i} ${j}`,
        index: j,
        image: 'stanford2.jpg',
        overlay: 'red',
        text: `${i} ${j}`,
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
const y = JSON.parse(JSON.stringify(x))
y.year = "2018"
const z = JSON.parse(JSON.stringify(x))
z.year = "2019"
export const carouselData = [
  x, y, z,
]
