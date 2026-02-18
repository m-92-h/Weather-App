import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Components/header/header";
import Body from "./Components/body/body";
import { WeatherProvider } from "./contextsAPI/WeatherProvider";

export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: "ease-in-out",
            disable: "mobile",
            mirror: false,
        });

        // Cleanup Function
        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <WeatherProvider>
            <div>
                <Header />
                <Body />
            </div>
        </WeatherProvider>
    );
}
