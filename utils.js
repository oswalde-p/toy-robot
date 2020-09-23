const { BOARD_HEIGHT, BOARD_WIDTH } = require('./consts')

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
    isValidPlace
}