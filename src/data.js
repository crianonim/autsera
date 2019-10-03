export default {
    places: [
      {
        name: "playground",
        displayName: "Playground",
        starsToUnlock: 0,
        image: "playground.png",
        positionOnMap:[23,12],
        interactions: [
          {
            title: "Leonie and Reuben fighting",
            image: "leoniereuben.png",
            positionOnPlace: [20, 10],
            radiusOnPlace: 12,
            localStarsToUnlock:0,
            options: [
              {
                name: "they are fighting",
                correct: true,
                response: "Correct! They look like they are fighting"
              },
              {
                name: "playing",
                correct: false,
                response: "Look again! Do they look like they are having fun?"
              },
              {
                name: "upset",
                correct: true,
                response: "Correct! They look upset"
              },
              {
                name: "happy",
                correct: false,
                response: "Look again, are they smiling?"
              }
            ],
            hints: [
              {
                text: "Look at their faces, are they smiling?",
                options: ["upset", "happy"]
              },
              {
                text: "Look if they are having fun?",
                options: ["playing", "they are fighting"]
              }
            ]
          },
          {
            title: "Jan is crying",
            image: "janisababy.png",
            positionOnPlace: [80, 60],
            radiusOnPlace: 8,
            localStarsToUnlock:1,
            options: [
              {
                name: "upset",
                correct: true,
                response: "Correct! He looks upset"
              },
              {
                name: "happy",
                correct: false,
                response: "Look again, are is he smiling?"
              }
            ],
            hints: [
              {
                text: "Look at his face, are they smiling?",
                options: ["upset", "happy"]
              }
            ]
          }
        ]
      },
      {
        name: "cemetary",
        displayName: "The Old Cementary",
        starsToUnlock: 3,
        image: "cemetary.png",
        interactions: [
          {
            title: "Funeral",
            image: "funeral.png",
            positionOnPlace: [20, 10],
            radiusOnPlace: 12,
            options: [
              {
                name: "they are fighting",
                correct: true,
                response: "Correct! They look like they are fighting"
              },
              {
                name: "playing",
                correct: false,
                response: "Look again! Do they look like they are having fun?"
              },
              {
                name: "upset",
                correct: true,
                response: "Correct! They look upset"
              },
              {
                name: "happy",
                correct: false,
                response: "Look again, are they smiling?"
              }
            ],
            hints: [
              {
                text: "Look at their faces, are they smiling?",
                options: ["upset", "happy"]
              },
              {
                text: "Look if they are having fun?",
                options: ["playing", "they are fighting"]
              }
            ]
          },
          {
            title: "Jan is crying",
            image: "janisababy.png",
            positionOnPlace: [80, 60],
            radiusOnPlace: 8,
            options: [
              {
                name: "upset",
                correct: true,
                response: "Correct! He looks upset"
              },
              {
                name: "happy",
                correct: false,
                response: "Look again, are is he smiling?"
              }
            ],
            hints: [
              {
                text: "Look at his face, are they smiling?",
                options: ["upset", "happy"]
              }
            ]
          }
        ]
      }
    ]
  };