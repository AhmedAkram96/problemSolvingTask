# problemSolvingTask

## manual run

1. RUN `npm install`
2. RUN `npm start`
3. Node app is now running on port 3000


## APIs documentation:

1. first question:
    - path: http://localhost:3000/api/countNumbers/
    - method: get
    - body: { start: 1, end: 9 }

2. second question:
    - path: http://localhost:3000/api/alphabetIndex/
    - method: get
    - body: { text: "BFG" }

3. third question:
    - path: http://localhost:3000/api/fewSteps/
    - method: get
    - body: { arr: [3, 4, 720, 625, 10000] }


## testing

I have added some test cases to test different scenarios using **MOCHA**

- RUN `npm test`
