/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^\w]/g,"");
  function reverse(str){
    let newString = ""
    for (let i = str.length-1; i>=0;i--){
      newString += str[i];
    }
    return newString
  }
  if (reverse(str)===str){
    return true;
  }else{
    return false;
  }
}

module.exports = isPalindrome;