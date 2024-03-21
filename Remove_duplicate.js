// const arr = [10, 20, 30, 40, 50, 10, 60];
// const temp = [...new Set(arr)];
// console.log(temp);

const arr = [10, 20, 30, 40, 50, 10, 20, 30, 60, 10];

let temp = arr.sort((a, b) => {
  return a - b;
});
// console.log(temp);

const orgArr = [];
for (let i = 0; i < temp.length; i++) {
  if (temp[i] != temp[i + 1]) {
    orgArr.push(temp[i]);
  } else {
    continue;
  }
}
console.log(orgArr);
