// Function to fetch user data from api
function fetchUserData() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw new Error('Failed to fetch user data:', error);
    });
}

// Using Promises
fetchUserData()
  .then(users => {
    console.log('User data:', users);
  })
  .catch(error => {
    console.error(error);
  });

// Using async/await
async function fetchAndDisplayUserData() {
  try {
    const users = await fetchUserData();
    console.log('User data:', users);
  } catch (error) {
    console.error(error);
  }
}

fetchAndDisplayUserData();
