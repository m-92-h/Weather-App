// component for this only file
import Search from "./search";
import CurrentWeather from "./currentWeather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./hourlyForecast";

export default function Body() {
    return (
        <main className="flex flex-col items-center justify-center gap-[clamp(1rem,5vw,6rem)] pb-12">
            <Search />
            
            <div className="dashboard-grid flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto">
                <div className="flex-1">
                    <CurrentWeather />
                    <DailyForecast />
                </div>
                <div>
                    <HourlyForecast />
                </div>
            </div>
        </main>
    );
}
