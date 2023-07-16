import { format, parseISO } from "date-fns";

const currentDay_Location = document.querySelector(".current_day_location");
const currentDay_DateAndTime = document.querySelector(
  ".current_day_date_and_time"
);

const currentDay_Icon = document.querySelector(".current_day_icon");
const currentDay_Degree = document.querySelector(".current_day_degree");
const currentDay_Status = document.querySelector(".current_day_status");
const currentDay_FeelsLike = document.querySelector(".current_day_feels_like");

const currentDay_TempHighest = document.querySelector(".info_temp_highest");
const currentDay_TempLowest = document.querySelector(".info_temp_lowest");
const currentDay_Wind = document.querySelector(".info_wind");
const currentDay_Humidity = document.querySelector(".info_humidity");
const currentDay_Visibility = document.querySelector(".info_visibility");
const currentDay_ChanceOfRain = document.querySelector(".info_chance_of_rain");
const currentDay_Sunrise = document.querySelector(".info_sunrise");
const currentDay_Sunset = document.querySelector(".info_sunset");
const currentDay_UVindex = document.querySelector(".info_uv_index");

// below adding the three day view
// ******** */

// today
const today_Day = document.querySelector(".today .day");
const today_Icon = document.querySelector(".today .icon");
const today_MaxDegree = document.querySelector(".today .degree_max");
const today_MinDegree = document.querySelector(".today .degree_min");

// tomorrow
const tomorrow_Day = document.querySelector(".tomorrow .day");
const tomorrow_Icon = document.querySelector(".tomorrow .icon");
const tomorrow_MaxDegree = document.querySelector(".tomorrow .degree_max");
const tomorrow_MinDegree = document.querySelector(".tomorrow .degree_min");

// the other day
const theOtherDay_Day = document.querySelector(".the_other_day .day");
const theOtherDay_Icon = document.querySelector(".the_other_day .icon");
const theOtherDay_MaxDegree = document.querySelector(
  ".the_other_day .degree_max"
);
const theOtherDay_MinDegree = document.querySelector(
  ".the_other_day .degree_min"
);

export function updateDomElements(weatherData) {
  currentDay_Location.textContent =
    weatherData.location.city + ", " + weatherData.location.country;

  currentDay_DateAndTime.textContent = format(
    new Date(weatherData.location.localtime),
    "EEEE d MMMM yyyy | HH:mm"
  );

  currentDay_Icon.setAttribute("src", weatherData.current.condition.icon_URL);
  currentDay_Degree.textContent = weatherData.current.temp_c + "°C";
  currentDay_Status.textContent = weatherData.current.condition.text;
  currentDay_FeelsLike.textContent =
    "Feels like " + weatherData.current.feelslike_c;

  currentDay_TempHighest.textContent =
    weatherData.forecast.day0.maxtemp_c + "°C";
  currentDay_TempLowest.textContent =
    weatherData.forecast.day0.mintemp_c + "°C";
  currentDay_Wind.textContent = weatherData.current.windspeed + " km/h";
  currentDay_Humidity.textContent = "%" + weatherData.current.humidity_percent;
  currentDay_Visibility.textContent = weatherData.current.visibility + " km";
  currentDay_ChanceOfRain.textContent =
    "%" + weatherData.current.chance_of_rain;
  currentDay_Sunrise.textContent = weatherData.current.sunrise;
  currentDay_Sunset.textContent = weatherData.current.sunset;
  currentDay_UVindex.textContent = weatherData.current.uv;

  today_Day.textContent = format(
    parseISO(weatherData.forecast.day0.date),
    "EEEE"
  );
  today_Icon.setAttribute("src", weatherData.forecast.day0.condition.icon_URL);
  today_MaxDegree.textContent = weatherData.forecast.day0.maxtemp_c;
  today_MinDegree.textContent = weatherData.forecast.day0.mintemp_c;

  tomorrow_Day.textContent = format(
    parseISO(weatherData.forecast.day1.date),
    "EEEE"
  );
  tomorrow_Icon.setAttribute(
    "src",
    weatherData.forecast.day1.condition.icon_URL
  );
  tomorrow_MaxDegree.textContent = weatherData.forecast.day1.maxtemp_c;
  tomorrow_MinDegree.textContent = weatherData.forecast.day1.mintemp_c;

  theOtherDay_Day.textContent = format(
    parseISO(weatherData.forecast.day2.date),
    "EEEE"
  );
  theOtherDay_Icon.setAttribute(
    "src",
    weatherData.forecast.day2.condition.icon_URL
  );
  theOtherDay_MaxDegree.textContent = weatherData.forecast.day2.maxtemp_c;
  theOtherDay_MinDegree.textContent = weatherData.forecast.day2.mintemp_c;
}
