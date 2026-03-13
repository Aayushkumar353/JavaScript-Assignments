/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let count = {}
  if(str1.length !== str2.length){
    return false
  } else {
    for (let char of str1){
      if (count[char]){
        count[char]++
      } else {
        count[char] = 1;
      }
    }
    for (let char of str2){
      if (!count[char]){
        return false
      } 
      count[char]--
    }
    return true
  }
}

module.exports = isAnagram;