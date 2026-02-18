import { useContext } from "react";
import { WeatherContext } from "../contextsAPI/WeatherContext.js";

// Hook custom for ease of use
export const useWeather = () => useContext(WeatherContext);
