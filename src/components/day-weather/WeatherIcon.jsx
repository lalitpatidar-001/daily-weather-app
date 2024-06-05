/**
 * WeatherType Component
 * 
 * This component displays weather type and temperature details, including temperature range, based on the received weather data.
 * It also converts temperature values based on the selected unit.
 * 
 * Props:
 *   - main: Object containing temperature range (temp_min and temp_max)
 *   - weather: Object containing weather type information (main, description, icon)
 * 
 * State:
 *   - None
 * 
 * Hooks:
 *   - useSelector: Used to access the temperature unit (type and postfix) from the Redux store.
 * 
 * @returns {JSX.Element} WeatherType component
 */

// import sun_clear_png from "@/assets/sun-clear.png";
// import temprature_png from "@/assets/thermometer.png";

import { useSelector } from "react-redux";
import tempratureConvert from "../../helper/tempratureConveret";




const WeatherType = ({ main, weather }) => {
    // OpenWeatherMap icon URL
    const OPEN__WEATHER_URL = "https://openweathermap.org/img/wn/";

    return (
        <div className="flex-1 flex md:flex-col justify-between items-center h-full w-full">
            {/* Display weather icon */}
            <img src={OPEN__WEATHER_URL + weather.icon + "@2x.png"} alt="sun_clear_png" className="w-[150px] h-[150px]"  />
            <div className="flex md:flex-col items-center gap-1">
                <div className="flex flex-col">
                    {/* Display weather type and description */}
                    <span className="font-bold text-2xl">{weather?.main}</span>
                    <span>{weather?.description}</span>
                </div>
                <div className="sm:flex hidden">
                    {/* Display temperature details */}
                    {/* <img height={10} width={40} alt="thermometer_png" src={temprature_png} /> */}
                    <div className="flex flex-col text-sm">
                        {/* Display high temperature */}
                        <div className="flex justify-between gap-1 font-medium">
                            <span>High:</span>
                            <div className="flex">
                                <span>{main?.temp_max}</span>
                                <span className="-mt-1 text-xs">o</span>
                                <span>C</span>
                            </div>
                        </div>
                        {/* Display low temperature */}
                        <div className="flex gap-1 font-medium justify-between">
                            <span>Low:</span>
                            <div className="flex">
                                <span className="text-sm">{ main?.temp_min}</span>
                                <span className="text-xs -mt-1">o</span>
                                <span>C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherType;
