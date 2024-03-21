let firstStr = "listen";
let secondStr = "silent";
const isAnagramString = (val1, val2) => {
  const firstArr = [];
  const secondArr = [];

  if (val1.length == val2.length) {
    for (let i = 0; i < val1.length; i++) {
      firstArr.push(val1[i]);
      secondArr.push(val2[i]);
    }

    const tempFirst = firstArr.sort().join("").toLowerCase();
    const tempSecond = secondArr.sort().join("").toLowerCase();
    if (tempFirst === tempSecond) {
      console.log(`${val1} and ${val2} are  anagram`);
    }
  } else {
    console.log(`${val1} and ${val2} are not anagram`);
  }
};
isAnagramString(firstStr, secondStr);
