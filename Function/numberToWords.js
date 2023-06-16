function numberToWords(number) {
  const units = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  if (number === 0) {
    return "zero";
  }

  if (number < 20) {
    return units[number];
  }

  if (number < 100) {
    return tens[Math.floor(number / 10)] + " " + units[number % 10];
  }

   if (number < 1000) {
    const hundred = units[Math.floor(number / 100)];
    const remainder = number % 100;
    const remainderWords = numberToWords(remainder);
    return remainder ? `${hundred} hundred ${remainderWords}` : `${hundred} hundred`;
  }

  if (number < 1000000) {
    const thousand = numberToWords(Math.floor(number / 1000));
    const remainder = number % 1000;
    const remainderWords = numberToWords(remainder);
    return remainder ? `${thousand} thousand ${remainderWords}` : `${thousand} thousand`;
  }

  if (number < 1000000000) {
    const million = Math.floor(number / 1000000);
    const remainder = number % 1000000;
    const millionWords = numberToWords(million);
    const remainderWords = numberToWords(remainder);
    return remainder ? `${millionWords} million ${remainderWords}` : `${millionWords} million`;
  }

  if (number < 1000000000000) {
    const billion = Math.floor(number / 1000000000);
    const remainder = number % 1000000000;
    const billionWords = numberToWords(billion);
    const remainderWords = numberToWords(remainder);
    return remainder ? `${billionWords} billion ${remainderWords}` : `${billionWords} billion`;
  }

  if (number < 1000000000000000) {
    const trillion = Math.floor(number / 1000000000000);
    const remainder = number % 1000000000000;
    const trillionWords = numberToWords(trillion);
    const remainderWords = numberToWords(remainder);
    return remainder ? `${trillionWords} trillion ${remainderWords}` : `${trillionWords} trillion`;
  }


  return "Number is too large to convert to words";
}

const number = 5455; // five thousand four hundred fifty five
const words = numberToWords(number); 
console.log(words); 