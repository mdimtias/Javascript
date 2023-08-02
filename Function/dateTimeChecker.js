function getCurrentDateTime() {
  // Get the current date and time
  const currentDate = new Date();
  
  // Format the current date and time as MM/DD/YYYY HH:mm AM/PM
  const formattedDateTime = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes().toString().padStart(2, '0')} ${currentDate.getHours() >= 12 ? 'PM' : 'AM'}`;
  
  return formattedDateTime;
}

// Get and display the current date and time
const currentDateTime = getCurrentDateTime();
console.log(currentDateTime); // Outputs: 08/04/2023 10:30 AM (the actual current date and time)
