function firstNonRepeatingLetter(s) {
    //we will use this array to pull the answer from either lowercase or uppercase
    const letters = s.split("")
    //we will use this array to check for duplicates by making all the letters lowercase
    const lowerLetters = s.toLowerCase().split("")
    
    //we use a nested loop to check every letter against every other letter
    for (let i = 0; i < letters.length; i++) {
      let letterRepeats = false
      for (let k = 0; k < letters.length; k++) {
        //this if statment checks for false positives by making sure
        //letters aren't checked against themselves
        if (i !== k) {
          //if the first time that a duplicate if found we mark it
          if (lowerLetters[i] === lowerLetters[k]) {
            letterRepeats = true
          }
        }
      }
      //if we found a repeating letter we return it
      if (!letterRepeats) {
        return letters[i]
      }
    }
    //if at the very end we didn't find a repeating letter we return an empty string
    return ""
}