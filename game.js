class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = 0
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
    // board
    // which field the player is choosing
    // X whose turn
    // funciton win conditions
    // function check the current player
  }
  checkMove() {
    this.turn++
    if (!this.turn % 2 == 0) { //modulo
      this.player1
      console.log('p1')
    } else {
      this.player2
      console.log('ptwoooooo')
    }
  }
  //how do i tell if a player has moved and how to represent the move
}


//update dom of players move
  //checkWin(){

//  }
  //checkDraw(){

//  }
  // if a player chooses a square another player choses a square once if
  // a player has made 3 or more choices
  //check to see if they one if not allow thme to make another move
