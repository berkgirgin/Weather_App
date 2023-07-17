import "../styles/index.css";
import { format } from "date-fns";
import { getWeather } from "./modules/API_functions.js";
import { updateDomElements } from "./modules/DOM_functions.js";

async function loadInitialContent() {
  const data = await getWeather("Berlin");
  updateDomElements(data);
}

loadInitialContent();
