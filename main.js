
// Query selectors
var gameBoard = document.querySelector('.game-box')




//Event listener
gameBoard.addEventListener('click', addPiece)

//Global Variable
var player1 = new Player
var player2 = new Player
var game = new Game(player1, player2)

//Functions
function addPiece(event){
  console.log(event.target.dataset.section)//checking the value of the section
  event.target.innerText = 'X'
  game.checkMove()

  //replace what is there with an x o
  //what are we clicking on

}
