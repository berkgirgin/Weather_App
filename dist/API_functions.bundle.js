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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJX2Z1bmN0aW9ucy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFLG1CQUFtQixLQUFLLG9CQUFvQixRQUFRLG9CQUFvQjs7QUFFdEo7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvamF2YXNjcmlwdC9tb2R1bGVzL0FQSV9mdW5jdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eV9uYW1lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgQVBJX2tleV9XZWF0aGVyQVBJID0gXCI1Zjg1ZWJjNTQ4MDQ0NzI1YjhmMTcxNTM5MjMyMjA1XCI7XG4gICAgY29uc3QgQVBJX2NpdHlfV2VhdGhlckFQSSA9IGNpdHlfbmFtZTtcbiAgICBjb25zdCBBUElfZGF5c19XZWF0aGVyQVBJID0gXCIzXCI7XG5cbiAgICBjb25zdCBVUkxfV2VhdGhlckFQSSA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9rZXlfV2VhdGhlckFQSX0mcT0ke0FQSV9jaXR5X1dlYXRoZXJBUEl9JmRheXM9JHtBUElfZGF5c19XZWF0aGVyQVBJfWA7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTF9XZWF0aGVyQVBJLCB7XG4gICAgICBtb2RlOiBcImNvcnNcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLy8gICBjb25zb2xlLmxvZyhkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpO1xuXG4gICAgY29uc3QgcmV0dXJuZWREYXRhT2JqID0ge1xuICAgICAgY3VycmVudDoge1xuICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICB0ZXh0OiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgaWNvbl9VUkw6IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcbiAgICAgICAgfSxcbiAgICAgICAgZmVlbHNsaWtlX2M6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgICAgZmVlbHNsaWtlX2Y6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcbiAgICAgICAgaHVtaWRpdHlfcGVyY2VudDogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICB0ZW1wX2M6IGRhdGEuY3VycmVudC50ZW1wX2MsXG4gICAgICAgIHRlbXBfZjogZGF0YS5jdXJyZW50LnRlbXBfZixcbiAgICAgICAgd2luZHNwZWVkOiBkYXRhLmN1cnJlbnQud2luZF9rcGgsXG4gICAgICAgIGxhc3RfdXBkYXRlZDogZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZCwgLy9kYXRlIGFuZCB0aW1lLCBlLmcgXCIyMDIzLTA2LTA4IDExOjE1XCJcbiAgICAgICAgY2hhbmNlX29mX3JhaW46IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgICAgfSxcblxuICAgICAgZm9yZWNhc3Q6IHtcbiAgICAgICAgZGF5MDoge1xuICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgdGV4dDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBpY29uX1VSTDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGUsIC8vZGF0ZSBlLmcgXCIyMDIzLTA2LTA4XCIsXG4gICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgbWludGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2MsXG4gICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2YsXG4gICAgICAgIH0sXG4gICAgICAgIGRheTE6IHtcbiAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgIHRleHQ6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgaWNvbl9VUkw6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlLCAvL2RhdGUgZS5nIFwiMjAyMy0wNi0wOFwiLFxuICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgIG1heHRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mLFxuICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jLFxuICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mLFxuICAgICAgICB9LFxuICAgICAgICBkYXkyOiB7XG4gICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICB0ZXh0OiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgIGljb25fVVJMOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZSwgLy9kYXRlIGUuZyBcIjIwMjMtMDYtMDhcIixcbiAgICAgICAgICBtYXh0ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZixcbiAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICBtaW50ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGNvdW50cnk6IGRhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICAgICAgY2l0eTogZGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgICBsb2NhbHRpbWU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJldHVybmVkRGF0YU9iajtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9