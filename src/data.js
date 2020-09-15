export const carouselData = [
  {
    year: 2017,
    lanes: [
      [
        {
          id: 'edutech',
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
        {
          id: 'marker-3',
          index: 5,
          image: 'marker',
          text: 'Summer Quarter',
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
          id: 'marker-4',
          index: 4,
          image: 'marker',
          text: 'Summer Quarter',
        },
        {
          id: 'marker-5',
          index: 5,
          image: 'marker',
          text: '',
        },
      ],
    ],
    connections: [
      ['stanford-1', 'openproof'],
      ['stanford-1', 'edutech'],
      ['marker-0', 'stanford-1'],
      ['openproof', 'marker-3'],
      ['marker-1', 'cs198'],
      ['cs198', 'marker-5'],
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
          id: 'marker-0',
          index: 0,
          image: 'marker',
          text: '',
        },
        {
          id: 'stanford-2',
          index: 1,
          image: 'stanford2.jpg',
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
          id: 'intuit',
          index: 4,
          image: 'intuit.png',
          overlay: 'blue',
          text: 'Intuit',
        },
        {
          id: 'marker-3',
          index: 5,
          image: 'marker',
          text: '',
        },
      ],
      [
        {
          id: 'vhil',
          index: 2,
          image: 'vhil.jpg',
          overlay: 'red',
          text: 'VHIL',
        },
        {
          id: 'marker-4',
          index: 3,
          image: 'marker',
          text: 'Spring Quarter',
        },
      ],
      [
        {
          id: 'marker-5',
          index: 0,
          image: 'marker',
          text: '',
        },
        {
          id: 'cs198',
          index: 2,
          image: 'cs198.png',
          overlay: 'blue',
          text: 'CS 198',
        },
        {
          id: 'marker-6',
          index: 5,
          image: 'marker',
          text: '',
        },
      ],
    ],
    connections: [
      ['marker-0', 'stanford-2'],
      ['stanford-2', 'intuit'],
      ['intuit', 'marker-3'],
      ['stanford-2', 'vhil'],
      ['vhil', 'marker-4'],
      ['marker-4', 'intuit'],
      ['marker-1', 'wolfbot'],
      ['marker-5', 'cs198'],
      ['cs198', 'marker-6'],
    ],
  },
  {
    year: 2019,
    lanes: [
      [
        {
          id: 'self-driving',
          index: 3,
          image: 'self-driving.png',
          overlay: 'green',
          text: 'Self-Driving',
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
          id: 'bridgewater',
          index: 4,
          image: 'bridgewater.png',
          overlay: 'red',
          text: 'Bridgewater',
        },
        {
          id: 'marker-3',
          index: 5,
          image: 'marker',
          text: '',
        },
      ],
      [],
      [
        {
          id: 'marker-4',
          index: 0,
          image: 'marker',
          text: '',
        },
        {
          id: 'marker-5',
          index: 1,
          image: 'marker',
          text: 'Fall Quarter',
        },
        {
          id: 'cs198',
          index: 2,
          image: 'cs198.png',
          overlay: 'blue',
          text: 'CS 198',
        },
      ],
    ],
    connections: [
      ['marker-0', 'stanford-1'],
      ['stanford-1', 'bridgewater'],
      ['marker-4', 'cs198'],
      ['marker-1', 'self-driving'],
      ['bridgewater', 'marker-3'],
      ['cs198', 'bridgewater'],
    ],
  },
  {
    year: 2020,
    lanes: [
      [],
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
          id: 'robinhood',
          index: 4,
          image: 'robinhood.png',
          overlay: 'green',
          text: 'Robinhood',
        },
        {
          id: 'marker-3',
          index: 5,
          image: 'marker',
          text: '',
        },
      ],
      [],
      [
        {
          id: 'marker-4',
          index: 1,
          image: 'marker',
          text: 'Fall Quarter',
        },
        {
          id: 'cs198',
          index: 2,
          image: 'cs198.png',
          overlay: 'blue',
          text: 'CS 198',
        },
      ],
    ],
    connections: [
      ['marker-0', 'stanford-1'],
      ['stanford-1', 'robinhood'],
      ['marker-0', 'cs198'],
      ['cs198', 'robinhood'],
    ],
  },
]
