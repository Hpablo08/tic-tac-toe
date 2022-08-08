// Query selectors
var gameBoard = document.querySelector('.game-box')
var playerTurn = document.querySelector('.player-turn')
var gameSpaces = document.querySelectorAll('td')
var title = document.querySelector('h1')
var playerOneScore = document.querySelector('.player-one-score')
var playerTwoScore = document.querySelector('.player-two-score')
var notValidSpace = document.querySelector('tbody')
var clearButton = document.querySelector('.clear-memory-button')
var waitImg = document.querySelector('.wait-image' )

//Event listener
gameBoard.addEventListener('click', addPiece)
clearButton.addEventListener('click', clearScores)
window.addEventListener('load', scoreKeeper)

//Global Variable
var player1 = new Player('Player 1', 'X')
var player2 = new Player('Player 2', 'O')
var game = new Game(player1, player2)

//Functions
function scoreKeeper() {
  player1.retrieveWinsFromStorage()
  player2.retrieveWinsFromStorage()
  playerOneScore.innerText = `${player1.wins}`
  playerTwoScore.innerText = `${player2.wins}`
}

function addPiece(event) {
  if (event.target.textContent === '' && event.target.dataset.section) {
    if (game.player1Turn === true) {
      game.board[parseInt(event.target.dataset.section) - 1] = 1
      player1.moves.push(parseInt(event.target.dataset.section))
      game.changeTurn()
      game.checkWin(player1)
    } else {
      game.board[parseInt(event.target.dataset.section) - 1] = 2
      player2.moves.push(parseInt(event.target.dataset.section))
      game.changeTurn()
      game.checkWin(player2)
    }
    playerHasWon()
    updateText()
  } else {
    return alert('Please click a valid spot')
  }
}

function playerHasWon() {
  game.checkDraw()
  if (game.winner) {
    hideBoard()
  }
}

function displayPieces() {
  for (var i = 0; i < game.board.length; i++) {
    if (game.board[i] === 0) {
      gameSpaces[i].innerText = ''
    } else if (game.board[i] === 1) {
      gameSpaces[i].innerText = 'X'//`${player1.token}`
    } else if (game.board[i] === 2) {
      gameSpaces[i].innerText = 'O'//`${player2.token}`
    }
  }
}

function newGame() {
  gameBoard.classList.remove('hidden')
  clearButton.classList.remove('hidden')
  waitImg.classList.add('hidden')
  game.resetGameState()
  updateText()
}

function hideBoard() {
  clearButton.classList.add('hidden')
  gameBoard.classList.add('hidden')
  waitImg.classList.remove('hidden')
  setTimeout(newGame, 3000)
}

function updateText() {
  displayPieces()
  if (game.winner) {
    title.innerText = `${game.winner}`
  } else if (game.player1Turn === true) {
    title.innerText = `It's Player 1's move`
  } else {
    title.innerText = `It's Player 2's move`
  }
  playerOneScore.innerText = `${player1.wins}`
  playerTwoScore.innerText = `${player2.wins}`

}


function clearScores(){
  window.location.reload()
  localStorage.clear()
}
