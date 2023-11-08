function solution(number) {
  let digets = [0, 0, 0, 0];
  let answer = "";
  while (number >= 1000) {
    digets[3] += 1000;
    number -= 1000;
  }
  while (number >= 100) {
    digets[2] += 100;
    number -= 100;
  }
  while (number >= 10) {
    digets[1] += 10;
    number -= 10;
  }
  while (number >= 1) {
    digets[0] += 1;
    number -= 1;
  }
  digets.forEach((diget) => {
    switch (diget) {
      case 1:
        answer = "I";
        break;
      case 2:
        answer = "II";
        break;
      case 3:
        answer = "III";
        break;
      case 4:
        answer = "IV";
        break;
      case 5:
        answer = "V";
        break;
      case 6:
        answer = "VI";
        break;
      case 7:
        answer = "VII";
        break;
      case 8:
        answer = "VIII";
        break;
      case 9:
        answer = "IX";
        break;
      case 10:
        answer = "X" + answer;
        break;
      case 20:
        answer = "XX" + answer;
        break;
      case 30:
        answer = "XXX" + answer;
        break;
      case 40:
        answer = "XL" + answer;
        break;
      case 50:
        answer = "L" + answer;
        break;
      case 60:
        answer = "LX" + answer;
        break;
      case 70:
        answer = "LXX" + answer;
        break;
      case 80:
        answer = "LXXX" + answer;
        break;
      case 90:
        answer = "XC" + answer;
        break;
      case 100:
        answer = "C" + answer;
        break;
      case 200:
        answer = "CC" + answer;
        break;
      case 300:
        answer = "CCC" + answer;
        break;
      case 400:
        answer = "CD" + answer;
        break;
      case 500:
        answer = "D" + answer;
        break;
      case 600:
        answer = "DC" + answer;
        break;
      case 700:
        answer = "DCC" + answer;
        break;
      case 800:
        answer = "DCCC" + answer;
        break;
      case 900:
        answer = "CM" + answer;
        break;
      case 1000:
        answer = "M" + answer;
        break;
      case 2000:
        answer = "MM" + answer;
        break;
      case 3000:
        answer = "MMM" + answer;
        break;
    }
  });
  return answer;
}
console.log(solution(1) + " 1");
console.log(solution(5) + " 5");
console.log(solution(9) + " 9");
console.log(solution(10) + " 10");
console.log(solution(1990) + " 1990");
console.log(solution(1666) + " 1666");
console.log(solution(3999) + " 3999");
