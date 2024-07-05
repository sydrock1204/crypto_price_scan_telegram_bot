import axios from "axios";

const weatherBaseUrl = "https://api.weatherapi.com/v1/current.json";

async function weather(city) {
  try {
    const response = await axios.get(
      `${weatherBaseUrl}?key=75ed5498cf504db38ab25435241005&q=${city}&aqi=yes`
    );

    console.log(response.data.current);

    const currentWeatherData = `
    Temperature of ${city} is ${response.data.current.temp_c}
    Humidity of ${city} is ${response.data.current.humidity}
    Wind direction of ${city} is ${response.data.current.wind_dir}
    Wind Speed of ${city} is ${response.data.current.wind_mph}
    `;

    return currentWeatherData;
  } catch (err) {
    return "Sorry, there was an error getting the weather.";
  }
}

// module.exports = weather;
export default weather;
