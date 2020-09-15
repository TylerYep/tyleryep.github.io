export const carouselData = [
  {
    year: 2017,
    lanes: [
      [
        {
          id: "edutech",
          index: 2,
          image: 'edutech.jpg',
          overlay: 'green',
          text: 'EduTech',
        },
      ],
      [
        {
          id: 'marker-0',
          index: 0,
          image: 'marker',
          text: '',
        },
        {
          id: 'stanford-1',
          index: 1,
          image: 'stanford.jpg',
          overlay: 'red',
          text: 'Stanford',
        },
        {
          id: 'marker-1',
          index: 2,
          image: 'marker',
          text: 'Winter Quarter',
        },
        {
          id: 'marker-2',
          index: 3,
          image: 'marker',
          text: 'Spring Quarter',
        },
        {
          id: 'openproof',
          index: 4,
          image: 'openproof.jpg',
          overlay: 'green',
          text: 'Openproof',
        },
      ],
      [],
      [
        {
          id: 'cs198',
          index: 3,
          image: 'cs198.png',
          overlay: 'blue',
          text: 'CS 198',
        },
        {
          id: 'marker-3',
          index: 4,
          image: 'marker',
          text: 'Summer Quarter',
        },
      ],
    ],
    connections: [
      ["stanford-1", "openproof"],
      ["stanford-1", "edutech"],
      // ["marker-0", "stanford"],
      // ["openproof", "marker-5"],
      ["marker-1", "cs198"],
      // ["cs198", "marker-6"],
    ],
  },
  {
    year: 2018,
    lanes: [
      [
        {
          id: 'wolfbot',
          index: 3,
          image: 'wolfbot.jpg',
          overlay: 'yellow',
          text: 'WolfBot',
        },
      ],
      [
        {
          id: 'stanford-2',
          index: 1,
          image: 'stanford2.jpg',
          overlay: 'red',
          text: 'Stanford',
        },
        {
          id: 'marker',
          index: 2,
          image: 'marker',
          text: 'Winter Quarter',
        },
        {
          index: 3,
          image: 'marker',
          text: 'Spring Quarter',
        },
        {
          index: 4,
          image: 'intuit.png',
          overlay: 'blue',
          text: 'Intuit',
        },
      ],
      [
        {
          index: 2,
          image: 'vhil.jpg',
          overlay: 'red',
          text: 'EduTech',
        },
        {
          index: 3,
          image: 'marker',
          text: 'Spring Quarter',
        },
      ],
      [
        {
          index: 2,
          image: 'cs198.png',
          overlay: 'blue',
          text: 'CS 198',
        },
      ],
    ],
    connections: [],
  },
  {
    year: 2019,
    lanes: [
      [
        {
          index: 2,
          image: 'self-driving.png',
          overlay: 'green',
          text: 'Self-Driving',
        },
      ],
      [
        {
          index: 1,
          image: 'stanford.jpg',
          overlay: 'red',
          text: 'Stanford',
        },
        {
          index: 2,
          image: 'marker',
          text: 'Winter Quarter',
        },
        {
          index: 3,
          image: 'marker',
          text: 'Spring Quarter',
        },
        {
          index: 4,
          image: 'bridgewater.png',
          overlay: 'red',
          text: 'Bridgewater',
        },
      ],
      [],
      [
        {
          index: 1,
          image: 'marker',
          text: 'Fall Quarter',
        },
        {
          index: 2,
          image: 'cs198.png',
          overlay: 'blue',
          text: 'CS 198',
        },
      ],
    ],
    connections: [],
  },
  {
    year: 2020,
    lanes: [
      [],
      [
        {
          index: 1,
          image: 'stanford.jpg',
          overlay: 'red',
          text: 'Stanford',
        },
        {
          index: 2,
          image: 'marker',
          text: 'Winter Quarter',
        },
        {
          index: 3,
          image: 'marker',
          text: 'Spring Quarter',
        },
        {
          index: 4,
          image: 'openproof.jpg',
          overlay: 'green',
          text: 'Stanford',
        },
      ],
      [],
      [
        {
          index: 1,
          image: 'marker',
          text: 'Fall Quarter',
        },
        {
          index: 2,
          image: 'cs198.png',
          overlay: 'blue',
          text: 'CS 198',
        },
      ],
    ],
    connections: [],
  },
]
