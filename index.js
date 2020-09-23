const readline = require('readline')

const lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// const running = true
// while (running) {
//   lineReader.question('> ', input => {
//     console.log(input)
//     lineReader.close()
//   })
// }

lineReader.on('line', input => {
//   console.log(input)
  const [ command, args] = input.split(' ')
  switch (command) {
  case 'PLACE':
    // console.log('placing')
    break
  case 'MOVE':
    // console.log('moving')
    break
  case 'LEFT':
    // console.log('left')
    break
  case 'RIGHT':
    // console.log('right')
    break
  case 'REPORT':
    console.log('0,1,NORTH')
    break
  default:
    console.log('Unknown command received:', command)
  }
})