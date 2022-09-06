function isPalindrome(word) {
  // Write your algorithm here
  if(word === word.split('').reverse().join('')){
    return true;
  } else{
    return false;
  }
}

/* 
  Add your pseudocode here
  Pseudocode written in book
*/

/*
  Add written explanation of your solution here
  The code takes the string you have defined and transforms it into an array using the split method
  From there it then reverses the now array and later on joins it back together
  The code then compares to see whether it is still the same word using an equality operator
  If found true it returns true, if found otherwise it returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("trigger"));
}

module.exports = isPalindrome;
