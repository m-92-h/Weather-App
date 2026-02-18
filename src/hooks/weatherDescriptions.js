// icons
import sunny from "../assets/images/icon-sunny.webp";
import storm from "../assets/images/icon-storm.webp";
import snow from "../assets/images/icon-snow.webp";
import rain from "../assets/images/icon-rain.webp";
import partlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import overcast from "../assets/images/icon-overcast.webp";
import fog from "../assets/images/icon-fog.webp";
import drizzle from "../assets/images/icon-drizzle.webp";

export const weatherDesc = {
    0: { label: "Clear Sky", icon: sunny },
    1: { label: "Mainly Clear", icon: sunny },
    2: { label: "Partly Cloudy", icon: partlyCloudy },
    3: { label: "Overcast", icon: overcast },
    45: { label: "Fog", icon: fog },
    51: { label: "Light Drizzle", icon: drizzle },
    56: { label: "Drizzle", icon: drizzle },
    61: { label: "Slight Rain", icon: rain },
    63: { label: "Rain", icon: rain },
    71: { label: "Slight Snow", icon: snow },
    73: { label: "Snow", icon: snow },
    75: { label: "Heavy Snow", icon: snow },
    77: { label: "Snow Grains", icon: snow },
    80: { label: "Slight Rain Showers", icon: rain },
    81: { label: "Rain Showers", icon: rain },
    82: { label: "Heavy Rain Showers", icon: rain },
    95: { label: "Thunderstorm", icon: storm },
};
