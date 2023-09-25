String.prototype.toJadenCase = function () {
    let phraseArr = this.split(" ")
    for(let i = 0; i < phraseArr.length; i++) {
      phraseArr[i] = phraseArr[i][0].toUpperCase() + phraseArr[i].slice(1)
    }
    return phraseArr.join(" ")
  };