//153 = 1**3 + 5**3 + 3**3
//1634 = 1**4 + 6**4 + 3**4 + 4**4

function someFun() {
  let result = 0;
  let userArmstrongNumberStr = prompt("Enter the armstrong Number");

  let length = userArmstrongNumberStr.length;
  let userArmstrongNumber = parseInt(userArmstrongNumberStr);
  let armstrongNumberCopy = userArmstrongNumber;

  //
  while (userArmstrongNumber > 0) {
    let remainder = userArmstrongNumber % 10;
    result += remainder ** length;
    userArmstrongNumber = parseInt(userArmstrongNumber / 10);
  }
  if (armstrongNumberCopy === result) {
    console.log("It is armstrongNumber " + armstrongNumberCopy);
  } else {
    console.log("It is not armstrongNumber " + armstrongNumberCopy);
  }
}

someFun();
