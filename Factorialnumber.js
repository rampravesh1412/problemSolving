const isFactorial = (val) => {
  let result = 1;
  for (let i = val; i >= 1; i--) {
    result *= i;
  }
  console.log(result);
};

isFactorial(5);
