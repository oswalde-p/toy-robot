const test = require('ava')
const proxyquire = require('proxyquire')
const sinon = require('sinon')

const utilStub = {
    getNextHeading: sinon.fake.returns('SOUTH'),
    isValidPlace: sinon.fake(({x}) => x >= 0 && x < 5)
}

const Robot = proxyquire('../../robot.js', {
    './utils': utilStub
})

test('Constructor creates new Robot with correct attributes', t => {
    const robot = new Robot()
    t.is(robot.x, null)
    t.is(robot.y, null)
    t.is(robot.heading, null)
})

test('.place() with correct types sets attributes correctly', t => {
    const robot = new Robot()

    robot.place(1, 1, 'NORTH')
    t.is(robot.x, 1)
    t.is(robot.y, 1)
    t.is(robot.heading, 'NORTH')

    robot.place(1, 1, 'EAST')
    t.is(robot.x, 1)
    t.is(robot.y, 1)
    t.is(robot.heading, 'EAST')

    robot.place(1, 1, 'SOUTH')
    t.is(robot.x, 1)
    t.is(robot.y, 1)
    t.is(robot.heading, 'SOUTH')

    robot.place(1, 1, 'WEST')
    t.is(robot.x, 1)
    t.is(robot.y, 1)
    t.is(robot.heading, 'WEST')
})

test('.place() with invalid heading throws an error', t => {
    const robot = new Robot()
    t.throws(() => robot.place(1, 1, 'OVER THERE'))
})

test('.place() with missing args throws an error', t => {
    const robot = new Robot()
    t.throws(() => robot.place(1, 'NORTH'))
    t.throws(() => robot.place('NORTH'))
    t.throws(() => robot.place())
})

test('.place() with incorrect types throws an error', t => {
    const robot = new Robot()
    t.throws(() => robot.place(1, '1', 'NORTH'))
    t.throws(() => robot.place('1', 1, 'NORTH'))
    t.throws(() => robot.place('NORTH', 1, 1))
})

test.serial('.place() checks if position is valid', t => {
    const robot = new Robot()
    robot.place(1, 1, 'NORTH')
    t.is(utilStub.isValidPlace.calledOnce, true)
    utilStub.isValidPlace.resetHistory()
})

test('.place() has no effect if position is invalid', t => {
    const robot = new Robot()

    robot.place(-1, 0, 'NORTH')
    t.is(robot.x, null)
    t.is(robot.y, null)
    t.is(robot.heading, null)
})

test('.place() calls isValidPlace with args in correct order', t => {
    const robot = new Robot()
    robot.place(0, 1, 'NORTH')

    t.is(utilStub.isValidPlace.calledWith({ x: 0, y: 1}), true)
})


test.serial('.move() checks if new position is valid', t => {
    const robot = new Robot()
    robot.place(1, 1, 'NORTH')

    robot.move()
    t.is(utilStub.isValidPlace.callCount, 2)
    utilStub.isValidPlace.resetHistory()
})

test('.move() has no effect if new position is invalid', t => {
    const robot = new Robot()
    robot.place(4, 0, 'EAST')

    robot.move()
    t.is(robot.x, 4)
    t.is(robot.y, 0)
    t.is(robot.heading, 'EAST')
})

test('.move() has no effect if robot hasn\'t been placed', t => {
    const robot = new Robot()
    robot.move()
    t.is(robot.x, null)
    t.is(robot.y, null)
    t.is(robot.heading, null)
})

test('.move() updates position correctly if valid', t => {
    const robot = new Robot()
    robot.place(0, 0, 'NORTH')

    robot.move()
    t.is(robot.x, 0)
    t.is(robot.y, 1)
    robot.move()
    t.is(robot.x, 0)
    t.is(robot.y, 2)

    robot.place(0, 0, 'EAST')

    robot.move()
    t.is(robot.x, 1)
    t.is(robot.y, 0)

    robot.place(4, 4, 'SOUTH')

    robot.move()
    t.is(robot.x, 4)
    t.is(robot.y, 3)

    robot.place(4, 4, 'WEST')

    robot.move()
    t.is(robot.x, 3)
    t.is(robot.y, 4)
})

test.serial('.turn("LEFT") updates heading correctly', t => {
    const robot = new Robot()
    robot.place(0, 0, 'NORTH')

    robot.turn('LEFT')
    t.is(utilStub.getNextHeading.calledOnce, true)
    t.is(utilStub.getNextHeading.calledWith('LEFT', 'NORTH'), true)
    t.is(robot.heading, 'SOUTH') // looks weird, but stub always returns south
    utilStub.getNextHeading.resetHistory()
})

test.serial('.turn("RIGHT") updates heading correctly', t => {
    const robot = new Robot()
    robot.place(0, 0, 'NORTH')

    robot.turn('RIGHT')
    t.is(utilStub.getNextHeading.calledOnce, true)
    t.is(utilStub.getNextHeading.calledWith('RIGHT', 'NORTH'), true)
    t.is(robot.heading, 'SOUTH') // looks weird, but stub always returns south
    utilStub.getNextHeading.resetHistory()
})

test('.turn() throws error if missing arg', t => {
    const robot = new Robot()
    robot.place(0, 0, 'NORTH')
    t.throws(() => robot.turn())
})

test('.turn() has no effect if robot hasn\'t been placed', t => {
    const robot = new Robot()
    robot.turn()
    t.is(robot.x, null)
    t.is(robot.y, null)
    t.is(robot.heading, null)
})