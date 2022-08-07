// Query selectors
var gameBoard = document.querySelector('.game-box')
var playerTurn = document.querySelector('.player-turn')
var gameSpaces = document.querySelectorAll('td')
var title = document.querySelector('h1')
var playerOneScore = document.querySelector('.player-one-score')
var playerTwoScore = document.querySelector('.player-two-score')
var notValidSpace = document.querySelector('tbody')


//Event listener
gameBoard.addEventListener('click', addPiece)
window.addEventListener('load', scoreKeeper)

//Global Variable
var player1 = new Player('player1', 'X')
var player2 = new Player('player2', 'O')
var game = new Game(player1, player2)

//Functions

function scoreKeeper(){
  player1.retrieveWinsFromStorage()
  player2.retrieveWinsFromStorage()
  playerOneScore.innerText = `${player1.wins}`
  playerTwoScore.innerText = `${player2.wins}`
}

function addPiece(event) {
  if (event.target.textContent.includes('X') || event.target.textContent.includes('O') || event.target.innerText === notValidSpace) {
    return alert('Please click a valid spot')
  }
  // console.log(event.target.dataset.section) //checking the value of the section
  // console.log(game.player1Turn)
  if (game.player1Turn === true) {
    event.target.innerText = 'X'
    player1.moves.push(parseInt(event.target.dataset.section))
    title.innerText = `It's Player 2's move`
    console.log(player1.moves)
    game.checkMove()
    game.checkWin()
  } else {
    event.target.innerText = 'O'
    player2.moves.push(parseInt(event.target.dataset.section))
    title.innerText = `It's Player 1's move`
    console.log(player2.moves)
    game.checkMove()
    game.checkWin()
  }
  playerHasWon()
}
//
// function squareAvailability(event){
//   if(event.target.textContent.includes('X') || event.target.textContent.includes('O')) {
//      alert('Please click a valid spot')
//   }
// }
function playerHasWon() {
  game.checkDraw()
  if (game.winner === 'player1') {
    title.innerText = 'Player 1 Wins!!!'
    playerOneScore.innerText = `${player1.wins}`
    gameBoard.classList.add('hidden')
    setTimeout(resetGameSpaces, 3000)
  }
  if (game.winner === 'player2') {
    title.innerText= 'Player 2 Wins!!!'
    playerTwoScore.innerText = `${player2.wins}`
    gameBoard.classList.add('hidden')
    setTimeout(resetGameSpaces, 3000) //reset board
  }
  if (game.winner === 'draw'){
    title.innerText= "It's a Draw! play again?"
    gameBoard.classList.add('hidden')
    setTimeout(resetGameSpaces, 3000)
  }
}

function resetGameSpaces() {
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].innerText = ''
  }
    gameBoard.classList.remove('hidden')
    game.resetGameBoard()
  }
