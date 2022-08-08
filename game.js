class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = 1
    this.player1Turn = true
    this.winner = null
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
  changeTurn() {
    this.turn++
    if (this.player1Turn === true) {
      this.player1Turn = false
    } else {
      this.player1Turn = true
    }
  }
  checkWin(player) {
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
      if (this.includesSpaces(player, winnerStates, i)) {
        player.wins++
        player.saveWinsToStorage()
        if (!this.player1Turn) {
          this.winner = 'Player 1 Wins!!!'
        } else {
          this.winner = 'Player 2 Wins!!!'
        }
      }
    }
  }
  includesSpaces(player, winnerStates, i) {
    if ((player.moves.includes(winnerStates[i][0])) &&
      (player.moves.includes(winnerStates[i][1])) &&
      (player.moves.includes(winnerStates[i][2]))) {
      return true
    }
  }
  resetGameState() {
    this.turn = 1
    this.player1turn = true
    this.player1.moves = []
    this.player2.moves = []
    this.winner = null
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
  checkDraw() {
    if (this.turn === 10 && this.winner === null) {
      return this.winner = "It's a Draw! play again?"
    }
  }
}
