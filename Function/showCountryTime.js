async function showCountryTime(countryName) {
  try {
    const response = await fetch(`https://worldtimeapi.org/api/timezone/${countryName}`);
    const data = await response.json();

    if (response.ok) {
      const { datetime } = data;
      const formattedTime = new Date(datetime).toLocaleTimeString();

      console.log(`Current time in ${countryName}: ${formattedTime}`);
    } else {
      console.log(`Error: ${data.error}`);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
showCountryTime('Asia/Dhaka');

