# Toy robot simulation

A simulation of a robot moving on a square tabletop, implemented in Node.js

## Running

First, install dependencies:
```bash
npm install
```

Next, start the process:

```bash
npm start
```

The program then listens for instructions from stdin. Valid commands are:

- **PLACE X,Y,F:** put the toy robot on the table in position X,Y and facing F, where F is NORTH,
  SOUTH, EAST or WEST.
- **MOVE:** move the toy robot one unit forward in the direction it is
  currently facing.
- **LEFT** and **RIGHT:** rotate the robot 90 degrees in the specified direction
  without changing the position of the robot.
- **REPORT:** print the current coordinates and heading of the robot to stdout


## Tests

All tests can be run with npm:
```bash
npm test
```

## e2e

There are some basic "e2e"-like tests written in bash, checking the  output
of a series of commands. Run them with:
```bash
npm run test:e2e
```