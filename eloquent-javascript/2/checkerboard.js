const checkerboard = (size) => {
  let board = "";

  for (let row=1; row <= size; row++) {
    for (let col=1; col <= size; col++) {
      if ((row+col) % 2 == 0) {
        board += " ";
      } else {
        board += "#"
      }
    }
    board += "\n";
  }
  return board;
}

const chessboard = checkerboard(8);

console.log(chessboard)
