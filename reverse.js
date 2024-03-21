//reverse string

const isReverseString = (val) => {
  let valLength = val.length;
  let tempArr = [];
  for (let i = valLength - 1; i >= 0; i--) {
    tempArr.push(val[i]);
  }
  console.log(tempArr.join(""));
};
isReverseString("hello baby");
