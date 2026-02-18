import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { useWeather } from "../../hooks/useWeather";
import { MdOutlineSettings } from "react-icons/md";

export default function NavDropdown() {
    const { setUnitTemp, setUnitWind, setUnitPrecip, handleSearch, weather, currentCity, unitTemp, unitWind, unitPrecip } = useWeather();

    // A help function to update the module and re-search if a city is currently being displayed. (دالة مساعدة لتحديث الوحدة وإعادة البحث إذا كانت هناك مدينة معروضة حالياً)
    const updateUnit = (type, value) => {
        if (type === "temp") setUnitTemp(value);
        if (type === "wind") setUnitWind(value);
        if (type === "precip") setUnitPrecip(value);

        // If weather information is displayed, re-search to update the units immediately using the current city. (إذا كان هناك طقس معروض، أعد البحث لتحديث الوحدات فوراً باستخدام المدينة الحالية)
        if (weather && currentCity) {
            handleSearch(null, currentCity);
        }
    };

    return (
        <Menu as="div" className="relative inline-block md:p-4 ">
            {({ open }) => (
                <>
                    <MenuButton className="cursor-pointer inline-flex items-center w-full text-[clamp(12px,3vw,18px)] justify-center gap-x-1.5 rounded-lg bg-neutral-200 px-1.5 py-1 md:px-3 md:py-2 font-semibold text-neutral-900 border md:border-2 border-neutral-300 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                        <MdOutlineSettings className="size-4 md:size-5 text-neutral-900" />
                        <span>Units</span>
                        <ChevronDownIcon aria-hidden="true" className={`-mr-1 size-4 md:size-5 lg:size-6 text-neutral-900 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
                    </MenuButton>

                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 md:w-56 origin-top-right divide-y divide-neutral-300 rounded-lg bg-neutral-200 border md:border-2 border-neutral-300 shadow-lg transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                        <div className="py-1 md:py-2">
                            <MenuItem>
                                <div className="p-2 text-[clamp(12px,5vw,16px)]">
                                    <h4 className="font-bold text-neutral-900 mb-2">Switch to Imperial</h4>
                                    <h5 className="text-sm font-semibold text-neutral-800">Temperature</h5>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    onClick={() => updateUnit("temp", "celsius")}
                                    className=" w-full text-left px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-300 focus:bg-neutral-300 focus:outline-none cursor-pointer transition-colors flex items-center justify-between"
                                >
                                    <span>Celsius (°C)</span>
                                    {unitTemp === "celsius" && <CheckIcon className="w-5 h-5 text-neutral-900" />}
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    onClick={() => updateUnit("temp", "fahrenheit")}
                                    className=" w-full text-left px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-300 focus:bg-neutral-300 focus:outline-none cursor-pointer transition-colors flex items-center justify-between"
                                >
                                    <span>Fahrenheit (°F)</span>
                                    {unitTemp === "fahrenheit" && <CheckIcon className="w-5 h-5 text-neutral-900" />}
                                </button>
                            </MenuItem>
                        </div>
                        <div className="py-2">
                            <MenuItem>
                                <h5 className="px-4 py-2 text-sm font-semibold text-neutral-800">Wind Speed</h5>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    onClick={() => updateUnit("wind", "kmh")}
                                    className=" w-full text-left px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-300 focus:bg-neutral-300 focus:outline-none cursor-pointer transition-colors flex items-center justify-between"
                                >
                                    <span>km/h</span>
                                    {unitWind === "kmh" && <CheckIcon className="w-5 h-5 text-neutral-900" />}
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    onClick={() => updateUnit("wind", "mph")}
                                    className=" w-full text-left px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-300 focus:bg-neutral-300 focus:outline-none cursor-pointer transition-colors flex items-center justify-between"
                                >
                                    <span>mph</span>
                                    {unitWind === "mph" && <CheckIcon className="w-5 h-5 text-neutral-900" />}
                                </button>
                            </MenuItem>
                        </div>
                        <div className="py-2">
                            <MenuItem>
                                <h5 className="px-4 py-2 text-sm font-semibold text-neutral-800">Precipitation</h5>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    onClick={() => updateUnit("precip", "mm")}
                                    className=" w-full text-left px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-300 focus:bg-neutral-300 focus:outline-none cursor-pointer transition-colors flex items-center justify-between"
                                >
                                    <span>Millimeters (mm)</span>
                                    {unitPrecip === "mm" && <CheckIcon className="w-5 h-5 text-neutral-900" />}
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    onClick={() => updateUnit("precip", "inch")}
                                    className=" w-full text-left px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-300 focus:bg-neutral-300 focus:outline-none cursor-pointer transition-colors flex items-center justify-between"
                                >
                                    <span>Inches (in)</span>
                                    {unitPrecip === "inch" && <CheckIcon className="w-5 h-5 text-neutral-900" />}
                                </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </>
            )}
        </Menu>
    );
}
