const { BOARD_HEIGHT, BOARD_WIDTH, TURNING_DIRECTIONS } = require('./consts')


const getNextHeading = function(leftOrRight, currentHeading) {
    if (!TURNING_DIRECTIONS[leftOrRight]) throw new Error('Unknown direction', leftOrRight)
    const orderedHeadings = ['NORTH', 'EAST', 'SOUTH', 'WEST']
    const currentIndex = orderedHeadings.indexOf(currentHeading)
    let newIndex = leftOrRight == TURNING_DIRECTIONS.LEFT ? currentIndex - 1 : currentIndex + 1
    if (newIndex == 4) {
        newIndex = 0
    } else if (newIndex == -1) {
        newIndex = 3
    }
    return orderedHeadings[newIndex]
}

/**
 * Check whether a given coordinate pair is on the board
 * @param {*} param0 obj containing x,y coordinates
 */
const isValidPlace = function({ x, y }){
    if (x == undefined) throw new Error('Missing paramater: x')
    if (y == undefined) throw new Error('Missing paramater: y')
    if (!Number.isInteger(x)) throw new Error('x must be an integer')
    if (!Number.isInteger(y)) throw new Error('y must be an integer')
  
    if (x < 0 || x > BOARD_WIDTH -1) return false
    return (y >= 0 && y < BOARD_HEIGHT)
}

module.exports = {
    getNextHeading,
    isValidPlace
}