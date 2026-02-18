import { useWeather } from "../../hooks/useWeather";
import { weatherDesc } from "../../hooks/weatherDescriptions";

// icons
import partlyCloudy from "../../assets/images/icon-partly-cloudy.webp";

export default function DailyForecast() {
    const { weather } = useWeather();

    if (!weather || !weather.daily) return null;

    return (
        <section className="daily-forecast my-8 px-4 md:px-6">
            <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">Daily forecast</h2>
            <div className="forecast-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {/* نستخدم map للمرور على مصفوفة الأيام السبعة */}
                {weather.daily.days.map((dayTime, index) => {
                    // 1. تحويل التاريخ إلى اسم اليوم (Tue, Wed, إلخ)
                    const dayName = new Date(dayTime).toLocaleDateString("en-US", { weekday: "short" });

                    // 2. الحصول على الأيقونة والوصف بناءً على كود الحالة لهذا اليوم
                    const code = weather.daily.weatherCodes[index];
                    const status = weatherDesc[code] || { label: "Cloudy", icon: partlyCloudy };

                    return (
                        <article key={dayTime} className="bg-neutral-200 flex flex-col p-4 border-2 border-neutral-300 rounded-lg hover:bg-neutral-700/50 transition-colors text-center">
                            <time className="text-sm font-semibold text-neutral-800 mb-3">{dayName}</time>
                            <img src={status.icon} alt={status.label} className="w-10 h-10 md:w-14 md:h-14 lg:w-10 lg:h-10 mx-auto mb-3" />

                            <div className="flex items-center justify-center gap-2">    
                                <span className="text-lg font-bold text-neutral-900">{Math.round(weather.daily.tempMax[index])}°</span>
                                <span className="text-sm text-neutral-800">{Math.round(weather.daily.tempMin[index])}°</span>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
