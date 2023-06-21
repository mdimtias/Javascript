function getRandomWinner(people) {
  if (people.length === 0) {
    return 'No participants found.';
  }
  
  const randomIndex = Math.floor(Math.random() * people.length);
  const winner = people[randomIndex];
  
  return winner;
}

const participants = ['John', 'Sarah', 'Mike', 'Emily', 'David'];
const winner = getRandomWinner(participants);
console.log('The winner is:', winner);
