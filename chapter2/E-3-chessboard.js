const size = 8

let board = ''
for(let r = 0; r < size; r++) {
  for(let c = 0; c < size; c++)
    board += (r + c) % 2 ? '#' : ' '
  board += '\n'
}

console.log(board)