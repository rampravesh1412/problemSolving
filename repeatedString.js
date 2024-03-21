const str = "Great responsibility";

const isRepeatedString = (val) => {
  let strLength = val.length;
  for (let i = 0; i < strLength; i++) {
    for (let j = i + 1; j < strLength; j++) {
      if (val[i] == val[j]) {
        console.log(val[i]);
      } else {
        continue;
      }
    }
  }
};

isRepeatedString(str);
