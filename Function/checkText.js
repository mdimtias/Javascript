function checkText(text) {
  // Remove leading and trailing whitespace
  text = text.trim();

  // Count the number of words
  const wordCount = text.split(/\s+/).length;

  // Count the number of characters (excluding whitespaces)
  const characterCount = text.replace(/\s/g, '').length;

  return {
    words: wordCount,
    characters: characterCount
  };
}

// Usage example
const text = "Hello, world! This is a sample text.";
const result = checkText(text);
console.log("Word count:", result.words);
console.log("Character count:", result.characters);
