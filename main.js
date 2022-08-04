
// Query selectors
var gameBoard = document.querySelector('.game-box')
var playerTurn = document.querySelector('.player-turn')



//Event listener
gameBoard.addEventListener('click', addPiece)

//Global Variable
var player1 = new Player()
var player2 = new Player()
var game = new Game(player1, player2)

//Functions
// function loadPage(){
//   addPiece()
// }

function addPiece(event){
  console.log(event.target.dataset.section)//checking the value of the section
  game.checkMove()
  console.log(game.player1Turn)
  if (game.player1Turn === true){
  event.target.innerText = 'X'
  player1.moves.push(event.target.dataset.section)
  console.log(player1.moves)
} else {
  event.target.innerText = 'O'
  player2.moves.push(event.target.dataset.section)
  console.log(player2.moves)
}
}

  //replace what is there with an x o
  //what are we clicking on
