class Player{
  constructor(id, marker){
    this.id = id
    this.marker = marker
    this.wins = 0
    this.moves= []
    // is turn set to a boolean
    // what symbol am I?
    // make a move
    // how many times I've won?
    // add local storage
  }
  saveWinsToStorage(){
    localStorage.setItem(`${this.id}`, JSON.stringify(this.wins))

  }
  retrieveWinsFromStorage(){
    var storedWins = JSON.parse(localStorage.getItem(`${this.id}`)) || []
    this.wins = storedWins
  }
}
