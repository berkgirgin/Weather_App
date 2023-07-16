"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["form_functions"],{

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


/***/ }),

/***/ "./src/javascript/modules/form_functions.js":
/*!**************************************************!*\
  !*** ./src/javascript/modules/form_functions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _API_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API_functions.js */ "./src/javascript/modules/API_functions.js");


//
//

const citySearchInput = document.querySelector("form input.city_search");
const citySearchSubmitButton = document.querySelector(
  "form button.submit_city"
);

// ending the fetch if it takes longer than given delay
function timeoutPromise(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Timeout!");
    }, delay);
  });
}

async function submitFunction(event) {
  function clearFormFields() {
    citySearchInput.value = "";
  }

  event.preventDefault();
  if (citySearchInput.value === "") {
    alert("search field is empty!");
    return;
  }
  console.log(citySearchInput.value);

  Promise.race([(0,_API_functions_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(citySearchInput.value), timeoutPromise(2000)])
    .then((data) => {
      if (data.error) {
        console.log(data.error);
        alert(data.error.message);
      } else {
        console.log("here is getWeather..");
        console.log(data);
      }
    })
    .catch((err) => {
      throw Error(err);
    });

  clearFormFields();
}

citySearchSubmitButton.addEventListener("click", (event) => {
  submitFunction(event);
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/modules/form_functions.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9mdW5jdGlvbnMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhFQUE4RSxtQkFBbUIsS0FBSyxvQkFBb0IsUUFBUSxvQkFBb0I7O0FBRXRKO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BGZ0Q7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQiw2REFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy9BUElfZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy9mb3JtX2Z1bmN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5X25hbWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBBUElfa2V5X1dlYXRoZXJBUEkgPSBcIjVmODVlYmM1NDgwNDQ3MjViOGYxNzE1MzkyMzIyMDVcIjtcbiAgICBjb25zdCBBUElfY2l0eV9XZWF0aGVyQVBJID0gY2l0eV9uYW1lO1xuICAgIGNvbnN0IEFQSV9kYXlzX1dlYXRoZXJBUEkgPSBcIjNcIjtcblxuICAgIGNvbnN0IFVSTF9XZWF0aGVyQVBJID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX2tleV9XZWF0aGVyQVBJfSZxPSR7QVBJX2NpdHlfV2VhdGhlckFQSX0mZGF5cz0ke0FQSV9kYXlzX1dlYXRoZXJBUEl9YDtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMX1dlYXRoZXJBUEksIHtcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCk7XG5cbiAgICBjb25zdCByZXR1cm5lZERhdGFPYmogPSB7XG4gICAgICBjdXJyZW50OiB7XG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgIHRleHQ6IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICBpY29uX1VSTDogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxuICAgICAgICB9LFxuICAgICAgICBmZWVsc2xpa2VfYzogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgICBmZWVsc2xpa2VfZjogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgICBodW1pZGl0eV9wZXJjZW50OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgIHRlbXBfYzogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgdGVtcF9mOiBkYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgICAgICB3aW5kc3BlZWQ6IGRhdGEuY3VycmVudC53aW5kX2twaCxcbiAgICAgICAgbGFzdF91cGRhdGVkOiBkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkLCAvL2RhdGUgYW5kIHRpbWUsIGUuZyBcIjIwMjMtMDYtMDggMTE6MTVcIlxuICAgICAgICBjaGFuY2Vfb2ZfcmFpbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICB9LFxuXG4gICAgICBmb3JlY2FzdDoge1xuICAgICAgICBkYXkwOiB7XG4gICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICB0ZXh0OiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgIGljb25fVVJMOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF0ZSwgLy9kYXRlIGUuZyBcIjIwMjMtMDYtMDhcIixcbiAgICAgICAgICBtYXh0ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZixcbiAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICBtaW50ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgfSxcbiAgICAgICAgZGF5MToge1xuICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgdGV4dDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBpY29uX1VSTDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGUsIC8vZGF0ZSBlLmcgXCIyMDIzLTA2LTA4XCIsXG4gICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgbWludGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2MsXG4gICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2YsXG4gICAgICAgIH0sXG4gICAgICAgIGRheTI6IHtcbiAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgIHRleHQ6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgaWNvbl9VUkw6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5pY29uLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlLCAvL2RhdGUgZS5nIFwiMjAyMy0wNi0wOFwiLFxuICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgIG1heHRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9mLFxuICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9jLFxuICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mLFxuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgY291bnRyeTogZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgICBjaXR5OiBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIGxvY2FsdGltZTogZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gcmV0dXJuZWREYXRhT2JqO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vQVBJX2Z1bmN0aW9ucy5qc1wiO1xuXG4vL1xuLy9cblxuY29uc3QgY2l0eVNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gaW5wdXQuY2l0eV9zZWFyY2hcIik7XG5jb25zdCBjaXR5U2VhcmNoU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJmb3JtIGJ1dHRvbi5zdWJtaXRfY2l0eVwiXG4pO1xuXG4vLyBlbmRpbmcgdGhlIGZldGNoIGlmIGl0IHRha2VzIGxvbmdlciB0aGFuIGdpdmVuIGRlbGF5XG5mdW5jdGlvbiB0aW1lb3V0UHJvbWlzZShkZWxheSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmVqZWN0KFwiVGltZW91dCFcIik7XG4gICAgfSwgZGVsYXkpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3VibWl0RnVuY3Rpb24oZXZlbnQpIHtcbiAgZnVuY3Rpb24gY2xlYXJGb3JtRmllbGRzKCkge1xuICAgIGNpdHlTZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoY2l0eVNlYXJjaElucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJzZWFyY2ggZmllbGQgaXMgZW1wdHkhXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zb2xlLmxvZyhjaXR5U2VhcmNoSW5wdXQudmFsdWUpO1xuXG4gIFByb21pc2UucmFjZShbZ2V0V2VhdGhlcihjaXR5U2VhcmNoSW5wdXQudmFsdWUpLCB0aW1lb3V0UHJvbWlzZSgyMDAwKV0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xuICAgICAgICBhbGVydChkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXJlIGlzIGdldFdlYXRoZXIuLlwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhyb3cgRXJyb3IoZXJyKTtcbiAgICB9KTtcblxuICBjbGVhckZvcm1GaWVsZHMoKTtcbn1cblxuY2l0eVNlYXJjaFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIHN1Ym1pdEZ1bmN0aW9uKGV2ZW50KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9