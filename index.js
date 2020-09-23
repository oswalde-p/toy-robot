const readline = require('readline')
const Robot = require('./robot')
const { exit } = require('process')

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
                console.log(`Error: ${err.message}`) // swallow it and let the user re-enter the command
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