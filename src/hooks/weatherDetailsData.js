// Weather details card configuration
export const getWeatherDetailsCards = (weather, unitWind, unitPrecip) => [
    {
        id: "feels-like",
        label: "Feels like",
        value: weather.current.feelsLike,
        unit: "°",
        delay: "100",
    },
    {
        id: "humidity",
        label: "Humidity",
        value: weather.current.humidity,
        unit: " %",
        delay: "200",
    },
    {
        id: "wind",
        label: "Wind",
        value: weather.current.windSpeed,
        unit: unitWind === "kmh" ? " km/h" : " mph",
        delay: "300",
    },
    {
        id: "precipitation",
        label: "Precipitation",
        value: weather.current.precipitation,
        unit: unitPrecip === "mm" ? " mm" : " in",
        delay: "400",
    },
];
