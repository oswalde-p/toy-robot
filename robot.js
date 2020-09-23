const { HEADINGS } = require('./consts')
const { isValidPlace } = require('./utils')

class Robot {
    constructor() {
        this.x = null,
        this.y = null,
        this.heading = null
    }

    place(x, y, heading) {
        if (!Number.isInteger(x)) throw new Error('x must be integer')
        if (!Number.isInteger(y)) throw new Error('y must be integer')
        if (!HEADINGS[heading]) throw new Error('Unknown heading', heading)
        if (!isValidPlace({x, y})) return
        this.x = x
        this.y = y
        this.heading = heading
    }
}

module.exports = Robot