function countdown(number) {
  if (number === 0) {
    console.log("Countdown complete!");
  } else {
    console.log(number);
    countdown(number - 1);
  }
}

countdown(5);
