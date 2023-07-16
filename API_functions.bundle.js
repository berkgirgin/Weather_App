"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["API_functions"],{

/***/ "./src/javascript/modules/API_functions.js":
/*!*************************************************!*\
  !*** ./src/javascript/modules/API_functions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(city_name) {
  try {
    const API_key_WeatherAPI = "5f85ebc548044725b8f171539232205";
    const API_city_WeatherAPI = city_name;
    const API_days_WeatherAPI = "3";

    const URL_WeatherAPI = `https://api.weatherapi.com/v1/forecast.json?key=${API_key_WeatherAPI}&q=${API_city_WeatherAPI}&days=${API_days_WeatherAPI}`;

    const response = await fetch(URL_WeatherAPI, {
      mode: "cors",
    });

    const data = await response.json();
    console.log(data);

    if (data.error) {
      return data;
    }

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
        chance_of_rain: data.forecast.forecastday[0].day.daily_chance_of_rain,
        visibility: data.current.vis_km,
        sunrise: data.forecast.forecastday[0].astro.sunrise, // 05:03 AM
        sunset: data.forecast.forecastday[0].astro.sunset, // 05:03 AM
        uv: data.current.uv,
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
          mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[0].day.mintemp_f,
        },
        day1: {
          condition: {
            text: data.forecast.forecastday[1].day.condition.text,
            icon_URL: data.forecast.forecastday[1].day.condition.icon,
          },
          date: data.forecast.forecastday[1].date, //date e.g "2023-06-08",
          maxtemp_c: data.forecast.forecastday[1].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[1].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[1].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[1].day.mintemp_f,
        },
        day2: {
          condition: {
            text: data.forecast.forecastday[2].day.condition.text,
            icon_URL: data.forecast.forecastday[2].day.condition.icon,
          },
          date: data.forecast.forecastday[2].date, //date e.g "2023-06-08",
          maxtemp_c: data.forecast.forecastday[2].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[2].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[2].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[2].day.mintemp_f,
        },
      },

      location: {
        country: data.location.country,
        city: data.location.name,
        localtime: data.location.localtime,
      },
    };

    return returnedDataObj;
  } catch (err) {
    return err;
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/modules/API_functions.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJX2Z1bmN0aW9ucy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFLG1CQUFtQixLQUFLLG9CQUFvQixRQUFRLG9CQUFvQjs7QUFFdEo7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvQVBJX2Z1bmN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5X25hbWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBBUElfa2V5X1dlYXRoZXJBUEkgPSBcIjVmODVlYmM1NDgwNDQ3MjViOGYxNzE1MzkyMzIyMDVcIjtcbiAgICBjb25zdCBBUElfY2l0eV9XZWF0aGVyQVBJID0gY2l0eV9uYW1lO1xuICAgIGNvbnN0IEFQSV9kYXlzX1dlYXRoZXJBUEkgPSBcIjNcIjtcblxuICAgIGNvbnN0IFVSTF9XZWF0aGVyQVBJID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX2tleV9XZWF0aGVyQVBJfSZxPSR7QVBJX2NpdHlfV2VhdGhlckFQSX0mZGF5cz0ke0FQSV9kYXlzX1dlYXRoZXJBUEl9YDtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMX1dlYXRoZXJBUEksIHtcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCk7XG5cbiAgICBjb25zdCByZXR1cm5lZERhdGFPYmogPSB7XG4gICAgICBjdXJyZW50OiB7XG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgIHRleHQ6IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICBpY29uX1VSTDogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxuICAgICAgICB9LFxuICAgICAgICBmZWVsc2xpa2VfYzogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgICBmZWVsc2xpa2VfZjogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgICBodW1pZGl0eV9wZXJjZW50OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgIHRlbXBfYzogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgdGVtcF9mOiBkYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgICAgICB3aW5kc3BlZWQ6IGRhdGEuY3VycmVudC53aW5kX2twaCxcbiAgICAgICAgbGFzdF91cGRhdGVkOiBkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkLCAvL2RhdGUgYW5kIHRpbWUsIGUuZyBcIjIwMjMtMDYtMDggMTE6MTVcIlxuICAgICAgICBjaGFuY2Vfb2ZfcmFpbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICAgIHZpc2liaWxpdHk6IGRhdGEuY3VycmVudC52aXNfa20sXG4gICAgICAgIHN1bnJpc2U6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZSwgLy8gMDU6MDMgQU1cbiAgICAgICAgc3Vuc2V0OiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldCwgLy8gMDU6MDMgQU1cbiAgICAgICAgdXY6IGRhdGEuY3VycmVudC51dixcbiAgICAgIH0sXG5cbiAgICAgIGZvcmVjYXN0OiB7XG4gICAgICAgIGRheTA6IHtcbiAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgIHRleHQ6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgaWNvbl9VUkw6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlLCAvL2RhdGUgZS5nIFwiMjAyMy0wNi0wOFwiLFxuICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgIG1heHRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mLFxuICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jLFxuICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mLFxuICAgICAgICB9LFxuICAgICAgICBkYXkxOiB7XG4gICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICB0ZXh0OiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgIGljb25fVVJMOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZSwgLy9kYXRlIGUuZyBcIjIwMjMtMDYtMDhcIixcbiAgICAgICAgICBtYXh0ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZixcbiAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICBtaW50ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgfSxcbiAgICAgICAgZGF5Mjoge1xuICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgdGV4dDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBpY29uX1VSTDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGUsIC8vZGF0ZSBlLmcgXCIyMDIzLTA2LTA4XCIsXG4gICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgbWludGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2MsXG4gICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2YsXG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBjb3VudHJ5OiBkYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgIGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgICAgbG9jYWx0aW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiByZXR1cm5lZERhdGFPYmo7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==