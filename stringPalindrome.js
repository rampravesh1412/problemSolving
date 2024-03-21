//madam , recer

const isPalindrome = (val) => {
  let textSplit = val.split("").reverse().join("");
  console.log(textSplit);
  if (val === textSplit) {
    console.log(`${val} is palindrome `);
  } else {
    console.log(`${val} is not palindrome `);
  }
};

isPalindrome("madama");
