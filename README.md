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
  SOUTH, EAST or WEST. Until the robot is placed, all other commands will be ignored.
- **MOVE:** move the toy robot one unit forward in the direction it is
  currently facing.
- **LEFT** and **RIGHT:** rotate the robot 90 degrees in the specified direction
  without changing the position of the robot.
- **REPORT:** print the current coordinates and heading of the robot to stdout

The board is a 5 x 5 unit grid. Any PLACE or MOVE command that would result in the robot being outside
of the grid will be ignored.

E.g.
```
PLACE 1,2,NORTH
PLACE 5,2,NORTH
REPORT // 1,2,NORTH

PLACE 4,4,EAST
MOVE
REPORT // 4,4,EAST
```


## Tests

All tests can be run with npm:
```bash
npm test
```

**Note:** the e2e tests use some UNIX commands, so they probably won't work on Windows.

### e2e

There are some basic "e2e"-like tests written in bash, checking the  output
of a series of commands. Run them with:
```bash
npm run test:e2e
```

### unit

Unit tests are written in ava, contained in tests/unit. Run them with

```bash
npm run test:unit
```