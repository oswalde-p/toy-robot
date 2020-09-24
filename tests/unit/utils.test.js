const test = require('ava')
const utils = require('../../src/utils.js')

test('isValidPlace returns true for 0,0', t => {
    const place = { x: 0, y: 0 }
    t.is(utils.isValidPlace(place), true)
})

test('isValidPlace returns true for 0,4', t => {
    const place = { x: 0, y: 4 }
    t.is(utils.isValidPlace(place), true)
})

test('isValidPlace returns true for 4,0', t => {
    const place = { x: 4, y: 0 }
    t.is(utils.isValidPlace(place), true)
})

test('isValidPlace returns true for 4,4', t => {
    const place = { x: 4, y: 4 }
    t.is(utils.isValidPlace(place), true)
})

test('isValidPlace returns false for -1,0', t => {
    const place = { x: -1, y: 0 }
    t.is(utils.isValidPlace(place), false)
})

test('isValidPlace returns false for 0,-1', t => {
    const place = { x: 0, y: -1 }
    t.is(utils.isValidPlace(place), false)
})

test('isValidPlace returns false for 5,0', t => {
    const place = { x: 5, y: 0 }
    t.is(utils.isValidPlace(place), false)
})

test('isValidPlace returns false for 0,5', t => {
    const place = { x: 0, y: 5 }
    t.is(utils.isValidPlace(place), false)
})

test('isValidPlace throws error for non-integer input', t => {
    const place = { x: 0.1, y: 0 }
    t.throws(() => utils.isValidPlace(place))

    place.x = 0
    place.y = 0.1
    t.throws(() => utils.isValidPlace(place))

    place.x = 'bananas'
    place.y = 0
    t.throws(() => utils.isValidPlace(place))

    place.x = 0
    place.y = 'apples'
    t.throws(() => utils.isValidPlace(place))
})

test('isValidPlace throws error for missing inout', t => {
    t.throws(() => utils.isValidPlace())
})

test('isValidPlace throws error for incomplete inout', t => {
    const missingY = { x: 0 }
    t.throws(() => utils.isValidPlace(missingY))

    const missingX = { y: 0 }
    t.throws(() => utils.isValidPlace(missingX))
})

test('getNextHeading("LEFT") updates heading correctly', t => {
    t.is(utils.getNextHeading('LEFT', 'NORTH'), 'WEST')
    t.is(utils.getNextHeading('LEFT', 'WEST'), 'SOUTH')
    t.is(utils.getNextHeading('LEFT', 'SOUTH'), 'EAST')
    t.is(utils.getNextHeading('LEFT', 'EAST'), 'NORTH')
})

test('getNextHeading("RIGHT") updates heading correctly', t => {
    t.is(utils.getNextHeading('RIGHT', 'NORTH'), 'EAST')
    t.is(utils.getNextHeading('RIGHT', 'EAST'), 'SOUTH')
    t.is(utils.getNextHeading('RIGHT', 'SOUTH'), 'WEST')
    t.is(utils.getNextHeading('RIGHT', 'WEST'), 'NORTH')
})
