class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = 1
    this.player1Turn= false
    this.winner = undefined
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

    // board
    // which field the player is choosing
    // X whose turn
    // function win conditions
    // function check the current player

  checkMove(event) {
    this.turn++
    if (this.turn % 2 == 0) { //modulo
      this.player1Turn = true
      console.log('p1')
    } else {
      this.player1Turn = false
      //this.player2
      console.log('ptwoooooo')
    }
    if (this.turn >= 4){
      this.checkWin()
    }
  }
  checkWin(moves){
    console.log('checking win')
    var winnerStates = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,7]
    ]
    for (var i = 0; i < winnerStates.length; i++) {
    if ((player2.moves.includes(winnerStates[i][0])) &&
    (player2.moves.includes(winnerStates[i][1])) &&
    (player2.moves.includes(winnerStates[i][2]))) {
      console.log('player 1 wins')
    }
    }
  }
  //check the array of wins to see if boards matches
  //update DOM to show winner
  //how do i tell if a player has moved and how to represent the move

resetGame(){
  this.turn = 1
  this.player1turn = false
}


}
//update dom of players move


//  }
  //checkDraw(){

//  }
  // if a player chooses a square another player choses a square once if
  // a player has made 3 or more choices
  //check to see if they one if not allow thme to make another move
