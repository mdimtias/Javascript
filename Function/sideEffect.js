// Global variable as a side effect
let counter = 0;

function incrementCounter() {
  counter++;
}
incrementCounter();

// Modifying an external array as a side effect
let array = [1, 2, 3];

function addItemToArray(item) {
  array.push(item);
}

// Interacting with the DOM as a side effect
function updateTitle(text) {
  document.title = text;
}

// Asynchronous side effect using setTimeout
function delayedAlert(message, delay) {
  setTimeout(function() {
    alert(message);
  }, delay);
}
console.log(counter);