# Toy robot simulation

A simulation of a robot moving on a square tabletop, implemented in Node.js

## Running

Start the process:

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

Tests can be run with npm:
```bash
npm test
```