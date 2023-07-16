import { getWeather } from "./API_functions.js";
import { updateDomElements } from "./DOM_functions.js";

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

  Promise.race([getWeather(citySearchInput.value), timeoutPromise(2000)])
    .then((data) => {
      if (data.error) {
        console.log(data.error);
        alert(data.error.message);
      } else {
        console.log("here is getWeather..");
        console.log(data);
        updateDomElements(data);
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
