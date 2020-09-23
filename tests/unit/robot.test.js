const test = require('ava')
const proxyquire = require('proxyquire')
const sinon = require('sinon')

const utilStub = {
    isValidPlace: sinon.fake(({x}) => x >= 0)
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
