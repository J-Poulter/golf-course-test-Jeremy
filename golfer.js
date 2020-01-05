class Golfer {
  constructor(golferObj) {
    this.name = golferObj.name;
    this.handicap = golferObj.handicap;
    this.frustration = golferObj.frustration || 0;
  }
  calculateAvg() {
    return `I usually shoot a ${this.handicap + 72} on average.`
  }
  playRound() {
    
  }
}


module.exports = Golfer;
