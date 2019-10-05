export default {
  "meta": {
   "sequence": 24
  },
  "places": [
   {
    "id": 0,
    "name": "playground",
    "displayName": "Playground",
    "starsToUnlock": 0,
    "image": "playground.png",
    "positionOnMap": [
     23,
     12
    ],
    "interactions": [
     {
      "id": 1,
      "title": "Leonie and Reuben fighting",
      "image": "leoniereuben.png",
      "positionOnPlace": [
       20,
       10
      ],
      "radiusOnPlace": 12,
      "localStarsToUnlock": 0,
      "options": [
       {
        "id": 2,
        "name": "they are fighting",
        "correct": true,
        "response": "Correct! They look like they are fighting"
       },
       {
        "id": 3,
        "name": "playing",
        "correct": false,
        "response": "Look again! Do they look like they are having fun?"
       },
       {
        "id": 4,
        "name": "upset",
        "correct": true,
        "response": "Correct! They look upset"
       },
       {
        "id": 5,
        "name": "happy",
        "correct": false,
        "response": "Look again, are they smiling?"
       }
      ],
      "hints": [
       {
        "id": 6,
        "text": "Look at their faces, are they smiling?",
        "options": [
         "upset",
         "happy"
        ]
       },
       {
        "id": 7,
        "text": "Look if they are having fun?",
        "options": [
         "playing",
         "they are fighting"
        ]
       }
      ]
     },
     {
      "id": 8,
      "title": "Jan is crying",
      "image": "janisababy.png",
      "positionOnPlace": [
       80,
       60
      ],
      "radiusOnPlace": 8,
      "localStarsToUnlock": 1,
      "options": [
       {
        "id": 9,
        "name": "upset",
        "correct": true,
        "response": "Correct! He looks upset"
       },
       {
        "id": 10,
        "name": "happy",
        "correct": false,
        "response": "Look again, are is he smiling?"
       }
      ],
      "hints": [
       {
        "id": 11,
        "text": "Look at his face, are they smiling?",
        "options": [
         "upset",
         "happy"
        ]
       }
      ]
     }
    ]
   },
   {
    "id": 12,
    "name": "cemetary",
    "displayName": "The Old Cementary",
    "starsToUnlock": 3,
    "image": "cemetary.png",
    "interactions": [
     {
      "id": 13,
      "title": "Funeral",
      "image": "funeral.png",
      "positionOnPlace": [
       20,
       10
      ],
      "radiusOnPlace": 12,
      "options": [
       {
        "id": 14,
        "name": "they are fighting",
        "correct": true,
        "response": "Correct! They look like they are fighting"
       },
       {
        "id": 15,
        "name": "playing",
        "correct": false,
        "response": "Look again! Do they look like they are having fun?"
       },
       {
        "id": 16,
        "name": "upset",
        "correct": true,
        "response": "Correct! They look upset"
       },
       {
        "id": 17,
        "name": "happy",
        "correct": false,
        "response": "Look again, are they smiling?"
       }
      ],
      "hints": [
       {
        "id": 18,
        "text": "Look at their faces, are they smiling?",
        "options": [
         "upset",
         "happy"
        ]
       },
       {
        "id": 19,
        "text": "Look if they are having fun?",
        "options": [
         "playing",
         "they are fighting"
        ]
       }
      ]
     },
     {
      "id": 20,
      "title": "Jan is crying",
      "image": "janisababy.png",
      "positionOnPlace": [
       80,
       60
      ],
      "radiusOnPlace": 8,
      "options": [
       {
        "id": 21,
        "name": "upset",
        "correct": true,
        "response": "Correct! He looks upset"
       },
       {
        "id": 22,
        "name": "happy",
        "correct": false,
        "response": "Look again, are is he smiling?"
       }
      ],
      "hints": [
       {
        "id": 23,
        "text": "Look at his face, are they smiling?",
        "options": [
         "upset",
         "happy"
        ]
       }
      ]
     }
    ]
   }
  ]
 }