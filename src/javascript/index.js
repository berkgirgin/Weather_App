import "../styles/index.css";
import { format } from "date-fns";
import { getWeather } from "./modules/API_functions.js";
import { updateDomElements } from "./modules/DOM_functions.js";

console.log("sa");

async function test() {
  const data = await getWeather("Izmir");
  updateDomElements(data);
}

test();
