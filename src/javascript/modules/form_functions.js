import { getWeather } from "./API_functions.js";
import { updateDomElements } from "./DOM_functions.js";

//
//

const body = document.querySelector("body");
const loadingEffectContainer = document.querySelector(".loading_effect");
const contentMainContainer = document.querySelector(".content_main_container");
const errorMessage = document.querySelector(".error_message");

const form = document.querySelector("form.form");
const searchBarContainer = document.querySelector(".search_bar_container");
const citySearchInput = document.querySelector("form input.city_search");
const citySearchSubmitButton = document.querySelector(
  "form button.submit_city"
);
const footer = document.querySelector("footer");

// ending the fetch if it takes longer than given delay
function timeoutPromise(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Timeout!");
    }, delay);
  });
}

function toggleLoadingState() {
  if (contentMainContainer.classList.contains("active")) {
    contentMainContainer.classList.remove("active");
    footer.classList.remove("active");
    loadingEffectContainer.classList.add("active");
  } else {
    contentMainContainer.classList.add("active");
    footer.classList.add("active");
    loadingEffectContainer.classList.remove("active");
  }
}

function displayError(err) {
  errorMessage.innerHTML = err;
  form.classList.add("error_active");
}

function clearError() {
  errorMessage.innerHTML = "";
  form.classList.remove("error_active");
}

async function submitFunction(event) {
  function clearFormFields() {
    citySearchInput.value = "";
  }

  event.preventDefault();
  if (citySearchInput.value === "") {
    displayError("search field is empty!");
    return;
  }
  console.log(citySearchInput.value);

  toggleLoadingState();

  Promise.race([getWeather(citySearchInput.value), timeoutPromise(2000)])
    .then((data) => {
      if (data.error) {
        console.log(data.error);
        setTimeout(() => {
          displayError(data.error.message);
          toggleLoadingState();
        }, 1000);
      } else {
        console.log("here is getWeather..");
        console.log(data);
        // add here the loading screen logic
        setTimeout(() => {
          updateDomElements(data);
          toggleLoadingState();
        }, 2000);
      }
    })
    .catch((err) => {
      throw Error(err);
    });

  clearFormFields();
}

citySearchSubmitButton.addEventListener("click", (event) => {
  clearError();
  submitFunction(event);
});

citySearchInput.addEventListener("input", () => {
  clearError();
});
document.addEventListener("click", (event) => {
  if (
    event.target !== searchBarContainer &&
    !searchBarContainer.contains(event.target)
  ) {
    clearError();
  }
});
