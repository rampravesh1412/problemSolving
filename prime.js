//prime number 17 , 19

const isPrimeNumber = () => {
  let primeNumber = +prompt("Enter the primeNumber");
  if (primeNumber === 1) {
    console.log(" 1 is not primeNumber");
  } else {
    for (let i = 2; i <= primeNumber / 2; i++) {
      if (primeNumber % i == 0) {
        console.log(`${primeNumber} is Not primeNumber`);
      } else {
        console.log(`${primeNumber} is  primeNumber`);
      }
    }
  }
};

isPrimeNumber();
