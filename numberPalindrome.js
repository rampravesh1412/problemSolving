//palindrome number like 111 , 151 , 575 , 2442

const isPalindrome = () => {
  let result = "";
  let palindromeNumber = +prompt("Enter the palindromeNumber");
  let palindromeNumberCopy = palindromeNumber;
  while (palindromeNumber > 0) {
    let rem = palindromeNumber % 10;
    result += rem;
    palindromeNumber = parseInt(palindromeNumber / 10);
  }
  if (result == palindromeNumberCopy) {
    console.log(`${palindromeNumberCopy} is palindrome Number`);
  } else {
    console.log(`${palindromeNumberCopy} is not palindrome Number`);
  }
};
isPalindrome();
