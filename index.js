const axios = require('axios');
require("dotenv").config();

const baseURL = 'https://www.weatherunion.com/gw/weather/external/v0';
const apiKey = process.env.API_KEY // Replace 'your_api_key_here' with your actual API key

async function fetchWeatherData() {
    try {
        // Using the get_locality_weather_data endpoint
        // const response = await axios.get(`${baseURL}/get_weather_data`, {
        const response = await axios.get(`${baseURL}/get_locality_weather_data`, {
            headers: {
                'content-type': 'application/json',
                'x-zomato-api-key': apiKey
            },
            params: {
                locality_id: 'ZWL006536'
                // latitude: 19.278130,
                // longitude: 72.874722
            }
        });

        console.log('Weather Data:', response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.response?.data || error.message);
    }
}

fetchWeatherData();
