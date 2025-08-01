/*
Pseudocode:
1. Create an empty Set to keep track of seen characters
2. Loop through each character in the string
   a. If the character is already in the Set, return false
   b. Otherwise, add the character to the Set
3. If we finish the loop with no repeats, return true
*/

/*
This code checks if a string has all unique characters using a Set.

1.What the Code Does
The function hasUniqueChars(str)

2.Takes a string as input (str)
Uses a JavaScript Set to keep track of unique characters
Loops over each character in the string
If a character is already in the set, it returns false (meaning the string has duplicates)
If not, it adds the character to the set
If it finishes looping without finding duplicates, it returns true
Test Cases

3. The console.log() lines run the function with different names/words and print whether each one has all unique letters.
What is a Set in JavaScript?
A Set is a special object that stores only unique values.
Adding the same value twice doesn’t change the set.
It’s efficient for checking if you’ve “seen” something already.
Example Output below:
In summary:
This is a JavaScript function for checking uniqueness of characters in a string, plus sample test cases.
*/ 

function hasUniqueChars(str) {
  const seen = new Set();
  for (let char of str) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }
  return true;
}

// Test cases with your name:
console.log(hasUniqueChars("Cassandra"));  // false (because "a" and "s" repeat)
console.log(hasUniqueChars("Antoinette"));  // false (because "t" and "e" repeat)
console.log(hasUniqueChars("Moore"));     // false (because "o" repeats)
console.log(hasUniqueChars("Belle"));     // false (because "l" repeats)
console.log(hasUniqueChars("Code"));      // true (all letters unique)