//Codewars challenge "Convert string to camel case"

function toCamelCase(str){
    str = str.replaceAll("-", "_")
    let arr = str.split("_")
    for(let i = 1; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    str = arr.join("")
    
    return str
  }

let test1 = "string-one"
let test2 = "string_two"
let test3 = "string_three-three"
let test4 = "String-Four"
let test5 = "string-five-five"

console.log(toCamelCase(test1))
console.log(toCamelCase(test2))
console.log(toCamelCase(test3))
console.log(toCamelCase(test4))
console.log(toCamelCase(test5))