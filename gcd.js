//42 , 45 = 9

let valFirst = 42;
let valSecond = 47;

const isGcd = (val1, val2) => {
  for (let i = parseInt(valSecond / 2); i >= 1; i--) {
    if (val1 % i == 0 && val2 % i == 0) {
      console.log(`Gcd is ${i}`);
      break;
    }
  }
};
isGcd(valFirst, valSecond);
