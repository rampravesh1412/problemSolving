const arr = [1, 2, 3, 4, 5, 6, 7, 8, 49];
let arrLength = arr.length;
const isReverseArray = (val) => {
  for (let i = arrLength - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

isReverseArray(arr);
