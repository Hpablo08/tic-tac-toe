class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = 1
    this.player1Turn = true
    this.winner = undefined
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  checkMove(event) {
    this.turn++
  if (this.player1Turn === true){
    this.player1Turn = false
  } else {
    this.player1Turn = true
  }
  }

  checkWin() {
      var winnerStates = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]
    for (var i = 0; i < winnerStates.length; i++) {
        if ((player1.moves.includes(winnerStates[i][0])) &&
        (player1.moves.includes(winnerStates[i][1])) &&
        (player1.moves.includes(winnerStates[i][2]))) {
          player1.wins++
        player1.saveWinsToStorage()
        this.winner = 'player1'
        console.log(`PLAYER 1 WINS!!!`)
      }
      if ((player2.moves.includes(winnerStates[i][0])) &&
        (player2.moves.includes(winnerStates[i][1])) &&
        (player2.moves.includes(winnerStates[i][2]))) {
        player2.wins++
        player2.saveWinsToStorage()
        this.winner = 'player2'
        console.log(`PLAYER 2 WINS!!!`)
      }
    }
  }
  //check the array of wins to see if boards matches
  //update DOM to show winner
  //how do i tell if a player has moved and how to represent the move
  resetGameBoard() {
      this.turn = 1
      this.player1turn = false //toggle player turn
      this.player1.moves = []
      this.player2.moves = []
      this.winner = undefined
    }

  checkDraw(){
    if(this.turn === 10 && this.winner === undefined){
      return this.winner = 'draw'
    }
  }
}
