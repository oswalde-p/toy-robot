const readline = require('readline')
const { exit } = require('process')

const Robot = require('./robot')
const { InputError } = require('./errors')

const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const robot = new Robot()

lineReader.on('line', input => {
    const [command, args = ''] = input.split(' ')
    const [x, y, heading] = args.split(',')
    switch (command) {
        case 'PLACE':
            try {
                robot.place(Number(x), Number(y), heading)
            } catch (err) {
                if (err instanceof InputError) {
                    return console.log(`InputError: ${err.message}`) // swallow it and let the user re-enter the command
                }
                console.error(err)
                exit(1)
            }
            break
        case 'MOVE':
            robot.move()
            break
        case 'LEFT':
            robot.turn('LEFT')
            break
        case 'RIGHT':
            robot.turn('RIGHT')
            break
        case 'REPORT':
            robot.report()
            break
        default:
            console.log('Unknown command received:', command)
    }
})