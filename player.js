class Player {
  constructor(id, marker,) {
    this.id = id
    this.marker = marker
    this.wins = 0
    this.moves = []
  }
  saveWinsToStorage() {
    localStorage.setItem(`${this.id}`, JSON.stringify(this.wins))
  }
  retrieveWinsFromStorage() {
    var storedWins = JSON.parse(localStorage.getItem(`${this.id}`)) || []
    this.wins = storedWins
  }
}
