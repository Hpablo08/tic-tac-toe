class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = 1
    this.player1Turn= false
    this.board = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false
    }
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
      this.player2
      console.log('ptwoooooo')
    }
  }
  checkWin(){
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
  //check the array of wins to see if boards matches
  //update DOM to show winner
  //how do i tell if a player has moved and how to represent the move
}
}
//update dom of players move


//  }
  //checkDraw(){

//  }
  // if a player chooses a square another player choses a square once if
  // a player has made 3 or more choices
  //check to see if they one if not allow thme to make another move
