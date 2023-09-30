function reverseWords(str) {
  let originalArr = str.split(" ")
  let answerArr = []
  for (let i = 0; i < originalArr.length; i++) {
    let wordArr = []
    for (let k = originalArr[i].length - 1; k >= 0; k--) {
      wordArr.push(originalArr[i][k])
    }
    answerArr.push(wordArr.join(""))
  }
  return answerArr.join(" ")
}

let test1 = "The quick brown fox jumps over the lazy dog!"
let test2 = "two  spaces"
console.log(reverseWords(test1))
console.log(reverseWords(test2))