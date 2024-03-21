//  Reverse number. 1548 == 8451

const isReverseNumber = (val) => {
  let result = "";
  while (val > 0) {
    let rem = val % 10;
    result += rem;
    val = parseInt(val / 10);
  }
  console.log(result);
};
isReverseNumber(1548);
