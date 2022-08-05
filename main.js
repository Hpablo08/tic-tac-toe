// Query selectors
var gameBoard = document.querySelector('.game-box')
var playerTurn = document.querySelector('.player-turn')
var gameSpaces = document.querySelectorAll('td')
var title = document.querySelector('h1')
var playerOneScore = document.querySelector('.player-one-score')
var playerTwoScore = document.querySelector('.player-two-score')

//Event listener
gameBoard.addEventListener('click', addPiece)

//Global Variable
var player1 = new Player()
var player2 = new Player()
var game = new Game(player1, player2)

//Functions

function addPiece(event) {
  game.checkMove()
  console.log(event.target.dataset.section) //checking the value of the section
  console.log(game.player1Turn)
  if (game.player1Turn === true) {
    event.target.innerText = 'X'
    player1.moves.push(parseInt(event.target.dataset.section))
    title.innerText= `It's Player 2's move`
    console.log(player1.moves)
    game.checkWin()
  } else {
    event.target.innerText = 'O'
    player2.moves.push(parseInt(event.target.dataset.section))
    title.innerText= `It's Player 1's move`
    console.log(player2.moves)
    game.checkWin()
  }
    playerHasWon()
}

function playerHasWon() {
    game.checkDraw()
  if (game.winner === 'player1') {
    title.innerText = 'Player 1 Wins!!!'
    playerOneScore.innerText = `${player1.wins}`
    resetGameSpaces()
  }
  if (game.winner === 'player2') {
    title.innerText= 'Player 2 Wins!!!'
    playerTwoScore.innerText = `${player2.wins}`
    resetGameSpaces() //reset board
  }
  if (game.winner === 'draw'){
    title.innerText= "It's a Draw! play again?"
    resetGameSpaces()
  }
}

function resetGameSpaces() {
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].innerText = ''
  }
   game.resetGameBoard() //reset board
  }


//displays playerTurn
//displays winnerStates
//resets game
//replace what is there with an x o
//what are we clicking on
// need to work on bugs can click again on square
