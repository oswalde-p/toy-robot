const { HEADINGS, TURNING_DIRECTIONS } = require('./consts')
const { getNextHeading, isValidPlace } = require('./utils')
const { InputError } = require('./errors')

class Robot {
    constructor() {
        this.x = null,
        this.y = null,
        this.heading = null
    }

    place(x, y, heading) {
        if (!Number.isInteger(x)) throw new InputError('x must be an integer')
        if (!Number.isInteger(y)) throw new InputError('y must be an integer')
        if (!HEADINGS[heading]) throw new InputError(`Unknown heading "${heading}"`)
        if (!isValidPlace({x, y})) return
        this.x = x
        this.y = y
        this.heading = heading
    }

    move() {
        if (!this.heading) return // robot hasn't been placed yet, ignore
        const newPlace = {
            x: this.x,
            y: this.y
        }

        switch (this.heading) {
            case HEADINGS.NORTH:
                newPlace.y++
                break
            case HEADINGS.SOUTH:
                newPlace.y--
                break
            case HEADINGS.EAST:
                newPlace.x++
                break
            case HEADINGS.WEST:
                newPlace.x--
                break
        }

        if (isValidPlace(newPlace)) {
            this.x = newPlace.x
            this.y = newPlace.y
        }
    }

    turn(leftOrRight) {
        if (!this.heading) return // robot hasn't been placed yet, ignore
        if (!TURNING_DIRECTIONS[leftOrRight]) throw new Error(`Unknown direction "${leftOrRight}"`)
        this.heading = getNextHeading(leftOrRight, this.heading)
    }

    report() {
        if (!this.heading) return
        console.log(`${this.x},${this.y},${this.heading}`)
    }
}

module.exports = Robot