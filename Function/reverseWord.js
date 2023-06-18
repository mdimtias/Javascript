function reverseWord(word) {
  // Split the word into an array of characters
  var characters = word.split('');
  
  // Reverse the order of the characters in the array
  var reversedCharacters = characters.reverse();
  
  // Join the reversed characters back into a string
  var reversedWord = reversedCharacters.join('');
  
  // Return the reversed word
  return reversedWord;
}

var word = 'Hello';
var reversedWord = reverseWord(word);
console.log(reversedWord); // Output: olleH
