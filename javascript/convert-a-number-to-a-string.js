function numberToString(num) {
    return num.toString()
  }

function numberToStringTwo(num) {
    //check for 0 first
    if (num === 0) {
        return "0"
    }

    let digets = []
    let index = 0
    let negitive = false
    let digitvalue = 1
    let answer = ""

    //check if number is negitive and then turn the number postivie
    if (num < 0) {
        negitive = true
        num = num*(-1)
    }

    //calculate how big the number is to create digitvalue so that if the number is 300 the digitvalue will start at 100 and be useable in counting the first diget
    while (digitvalue <= num) {
        digitvalue = digitvalue*10
    }
    digitvalue = digitvalue/10

    
    // if(digitvalue > 1){
    //     digitvalue=digitvalue/10
    // }
    
    //this loop runs until we have counted every diget
    while (digitvalue >= 1) {
        //this if statement checks if next diget is 0
        if (num < digitvalue) {
            digets.push(0)
        }
        //this while loop counts the diget and adds it to digets
        while (num >= digitvalue) {
            num = num - digitvalue
            if(digets.length === index) {
                digets.push(1)
            } else {
                digets[index] += 1
            }
        }
        digitvalue = digitvalue/10
        index++
    }
    digitvalue
    //this forEach loop creates the answer string one diget at a time
    digets.forEach((diget)=>{
        switch(diget) {
            case 1:
                answer = answer + "1"
                break
            case 2:
                answer = answer + "2"
                break
            case 3:
                answer = answer + "3"
                break
            case 4:
                answer = answer + "4"
                break
            case 5:
                answer = answer + "5"
                break
            case 6:
                answer = answer + "6"
                break
            case 7:
                answer = answer + "7"
                break
            case 8:
                answer = answer + "8"
                break
            case 9:
                answer = answer + "9"
                break
            case 0:
                answer = answer + "0"
                break
        }
    })
    //add the negitive symbol if necessary
    if (negitive) {
        return "-" + answer
    }
    return answer
  }
  console.log(numberToStringTwo(-1))
  console.log(numberToStringTwo(-101))
  console.log(numberToStringTwo(300))
