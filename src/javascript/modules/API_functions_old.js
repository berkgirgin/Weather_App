const API_key_WeatherAPI = "5f85ebc548044725b8f171539232205";
const API_city_WeatherAPI = "berlin";
const API_days_WeatherAPI = "3";

const URL_WeatherAPI = `https://api.weatherapi.com/v1/forecast.json?key=${API_key_WeatherAPI}&q=${API_city_WeatherAPI}&days=${API_days_WeatherAPI}`;

fetch(URL_WeatherAPI, {
  mode: "cors",
});

export async function getWeather() {
  const response = await fetch(URL_WeatherAPI, {
    mode: "cors",
  });

  const data = await response.json();
  //   console.log(data);

  //   console.log(data.current.condition.text);

  const returnedDataObj = {
    current: {
      condition: {
        text: data.current.condition.text,
        icon_URL: data.current.condition.icon,
      },
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      humidity_percent: data.current.humidity,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      windspeed: data.current.wind_kph,
      last_updated: data.current.last_updated, //date and time, e.g "2023-06-08 11:15"
    },

    forecast: {
      day0: {
        condition: {
          text: data.forecast.forecastday[0].day.condition.text,
          icon_URL: data.forecast.forecastday[0].day.condition.icon,
        },
        date: data.forecast.forecastday[0].date, //date e.g "2023-06-08",
        maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,
        maxtemp_f: data.forecast.forecastday[0].day.maxtemp_f,
      },
      day1: {
        condition: {
          text: data.forecast.forecastday[1].day.condition.text,
          icon_URL: data.forecast.forecastday[1].day.condition.icon,
        },
        date: data.forecast.forecastday[1].date, //date e.g "2023-06-08",
        maxtemp_c: data.forecast.forecastday[1].day.maxtemp_c,
        maxtemp_f: data.forecast.forecastday[1].day.maxtemp_f,
      },
      day2: {
        condition: {
          text: data.forecast.forecastday[2].day.condition.text,
          icon_URL: data.forecast.forecastday[2].day.condition.icon,
        },
        date: data.forecast.forecastday[2].date, //date e.g "2023-06-08",
        maxtemp_c: data.forecast.forecastday[2].day.maxtemp_c,
        maxtemp_f: data.forecast.forecastday[2].day.maxtemp_f,
      },
    },

    location: {
      country: data.location.country,
      city: data.location.name,
    },
  };

  //   console.log(returnedDataObj);
  return returnedDataObj;
}
