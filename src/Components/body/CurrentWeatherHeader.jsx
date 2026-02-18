import { weatherDesc } from "../../hooks/weatherDescriptions";

// icons
import partlyCloudy from "../../assets/images/icon-partly-cloudy.webp";

export default function CurrentWeatherHeader({ weather, formattedDate }) {
    return (
        <article
            className="currentWeatherHeader flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 mx-4 md:mx-6 p-6 rounded-lg text-center bg-cover bg-center bg-local"
            data-aos="fade-up"
        >
            <header className="flex flex-col gap-2 text-start" data-aos="zoom-in" data-aos-delay="100">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white">{`${weather.cityName},${weather.countryName}`}</h2>
                <time dateTime="2025-08-05" className="text-neutral-200 font-semibold text-lg">
                    {formattedDate}
                </time>
            </header>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg" data-aos="zoom-in" data-aos-delay="200">
                {(() => {
                    const currentStatus = weatherDesc[weather.current.weatherCode] || { label: "Cloudy", icon: partlyCloudy };
                    return <img src={currentStatus.icon} alt={currentStatus.label} className="w-24 h-24 md:w-28 md:h-28" />;
                })()}
                <span className="degree text-5xl md:text-6xl font-heading font-bold text-white">{weather.current.temperature}°</span>
            </div>
        </article>
    );
}
