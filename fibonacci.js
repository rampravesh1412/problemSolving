// 0 1 1 2 3 5 8 13 21

let firstNumber = 0;
console.log(firstNumber);
let secondNumber = 1;
console.log(secondNumber);

function fibonacciSeries() {
  for (let i = 1; i <= 10; i++) {
    const sum = firstNumber + secondNumber;
    console.log(sum);
    firstNumber = secondNumber;
    secondNumber = sum;
  }
}
fibonacciSeries();
