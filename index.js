function isPalindrome(word) {
  // Write your algorithm here
  let newPalindrome = word.split("").reverse().join("")
  if (word === newPalindrome){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
    assigned newPalindrome to be word so that i work with my values,
  then i returned true if condition is true and return else if the condition is false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
