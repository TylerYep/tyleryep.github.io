const cs198 = {
  id: 'cs198',
  index: 2,
  image: 'cs198.png',
  overlay: 'blue',
  text: 'CS198',
  modalText:
    'I was a section leader for CS 106A and CS106B, the introductory CS courses at Stanford!',
}

const stanford1 = {
  id: 'stanford-1',
  index: 1,
  image: 'stanford.jpg',
  overlay: 'red',
  text: 'Stanford',
  modalText:
    'This is the university where I have spent four years learning, growing, and thinking! Here, I have met some of the most incredible people I have ever known, and have worked with esteemed professors and researchers.',
}

const stanford2 = {
  id: 'stanford-2',
  index: 1,
  image: 'stanford2.jpg',
  overlay: 'red',
  text: 'Stanford',
  modalText:
    'This is the university where I have spent four years learning, growing, and thinking! Here, I have met some of the most incredible people I have ever known, and have worked with esteemed professors and researchers.',
}

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
          modalText:
            'I worked on this project with my teammates in EE 15N: The Art & Science of Engineering Design. Our goal was to make a website for 8th grade Social Studies teachers to use to incorporate more project-based learning in their classes.',
        },
      ],
      [
        {
          id: 'marker-0',
          index: 0,
          image: 'marker',
          text: '',
        },
        stanford1,
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
          modalText:
            'I learned a ton about web development and about working in a small group to accelerate the new version of a 10+ year old Logic curriculum website.',
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
        { ...cs198, index: 3 },
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
          modalText:
            'The most exciting project I have worked on for CS 221: Artificial Intelligence. Working with my project partner Harry Sha, we created two game-playing AIs that could navigate a social game of lies and deceit, designing and adapting machine learning algorithms to understand the game and choose optimal statements. The game solver determines which players are lying using consistent statement subsets, and the Wolf AI uses Expectimax + Reinforcement Learning to choose the best lie to evade detection.',
        },
      ],
      [
        {
          id: 'marker-0',
          index: 0,
          image: 'marker',
          text: '',
        },
        stanford2,
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
          modalText:
            'I worked here in the summer of 2018, working in the Payroll team (100+ people), to create a UI automation framework that could be used by all Payroll subteams for regression testing! I developed an automated UI test framework for Payroll teams, designed reliable click/ input functions using XPath selectors, integrated framework with Jenkins and backend service tests, and built a dashboard app to aggregate build results using React/Node.js.',
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
          modalText:
            'I created VR worlds for the Virtual Human Interaction Lab to use in PhD research, implemented a multiplayer VR full-body experience using Unity, SteamVR, and Photon, and set up online VR studies using WebVR and Django to reach more participants.',
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
        cs198,
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
          image: 'self-driving.jpg',
          overlay: 'green',
          text: 'Self-Driving',
          modalText:
            'My project for CS 231N: Convolutional Neural Networks for Visual Recognition. For our final project, my friend Woody and I trained a car simulator model to drive by responding to high-level controls (e.g. take the next available left turn). We used branched ResNet architecture to predict throttle and steering angle, and the final model car stays in its lane, completes turns, and follows directions.',
        },
      ],
      [
        {
          id: 'marker-0',
          index: 0,
          image: 'marker',
          text: '',
        },
        stanford1,
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
          modalText:
            'Developed features for DSL built on Scala used to author investment logic, on a feature that explains claims in financial reports and generates systematic reports with new data. Used React/Redux, a custom Scala backend, and a PostgreSQL database.',
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
        cs198,
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
        stanford1,
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
          modalText:
            'For the summer of my Senior year, I interned at Robinhood using the COVID-19 pandemic. Over the summer, I designed a new checkout flow backend API to place trades via ACH transfer on the Robinhood app, implemented the backend API in the Django backend and the frontend in the web app using React/Redux, and then integrated with Bonfire, a unified HTTP proxy layer.',
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
        cs198,
        {
          id: 'marker-4',
          index: 3,
          image: 'marker',
          text: 'Fall Quarter',
        },
      ],
    ],
    connections: [
      ['marker-0', 'stanford-1'],
      ['stanford-1', 'robinhood'],
      ['marker-0', 'cs198'],
      ['cs198', 'marker-4'],
      ['marker-4', 'robinhood'],
    ],
  },
]
