import { useState } from "react";
import axios from "axios";
import { WeatherContext } from "./WeatherContext";

// Create the Provider
export const WeatherProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const [currentCity, setCurrentCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [unitTemp, setUnitTemp] = useState("celsius");
    const [unitWind, setUnitWind] = useState("kmh");
    const [unitPrecip, setUnitPrecip] = useState("mm");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Suggestion fetch function
    const fetchSuggestions = async (searchTerm) => {
        if (!searchTerm.trim() || searchTerm.length < 2) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }

        try {
            const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=10&language=en&format=json`;
            const res = await axios.get(url);

            if (res.data.results) {
                setSuggestions(res.data.results);
                setShowSuggestions(true);
            } else {
                setSuggestions([]);
            }
        } catch (err) {
            console.error("Error fetching suggestions:", err);
            setSuggestions([]);
        }
    };

    const handleSearch = async (e, searchCity = null) => {
        if (e && e.preventDefault) e.preventDefault();

        // Use (searchCity) if passed, otherwise use (query) from state
        const cityToSearch = searchCity || query;

        if (!cityToSearch.trim()) return;

        setLoading(true);
        setError("");
        const controller = new AbortController();

        try {
            // Step 1: Geocoding
            const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityToSearch}&count=1&language=en&format=json`;
            const geoRes = await axios.get(geoUrl, { signal: controller.signal });

            if (!geoRes.data.results || geoRes.data.results.length === 0) {
                setError("City not found");
                setWeather(null);
                return;
            }

            const { latitude, longitude, name, country } = geoRes.data.results[0];

            // Store the current city name
            setCurrentCity(name);

            // Step 2: Fetch weather data with full details
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto&temperature_unit=${unitTemp}&wind_speed_unit=${unitWind}&precipitation_unit=${unitPrecip}`;
            const weatherRes = await axios.get(weatherUrl, { signal: controller.signal });

            const { current, hourly, daily } = weatherRes.data;

            setWeather({
                cityName: name,
                countryName: country,

                current: {
                    time: current.time,
                    temperature: current.temperature_2m,
                    feelsLike: current.apparent_temperature,
                    humidity: current.relative_humidity_2m,
                    windSpeed: current.wind_speed_10m,
                    precipitation: current.precipitation,
                    weatherCode: current.weather_code,
                },

                hourly: {
                    times: hourly.time,
                    temperatures: hourly.temperature_2m,
                    weatherCodes: hourly.weather_code,
                },

                daily: {
                    days: daily.time,
                    weatherCodes: daily.weather_code,
                    tempMax: daily.temperature_2m_max,
                    tempMin: daily.temperature_2m_min,
                },
            });

            // Delete the entered text after the search was successful
            setQuery("");
            setSuggestions([]);
            setShowSuggestions(false);
        } catch (err) {
            if (!axios.isCancel(err)) {
                setError(err.message || "An error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    // Pass all values and functions needed in the app
    const value = {
        query,
        setQuery,
        currentCity,
        weather,
        loading,
        error,
        unitTemp,
        setUnitTemp,
        unitWind,
        setUnitWind,
        unitPrecip,
        setUnitPrecip,
        handleSearch,
        suggestions,
        showSuggestions,
        setShowSuggestions,
        fetchSuggestions,
    };

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
};
