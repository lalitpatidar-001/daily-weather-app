/**
 * DayWeather Component
 * 
 * This component displays weather information for the current day.
 * It fetches forecast data from the Redux store and passes relevant data to child components.
 * 
 * Props:
 *   - None
 * 
 * State:
 *   - None
 * 
 * Hooks:
 *   - useSelector: Used to access forecast data and city details from the Redux store.
 * 
 * Child Components:
 *   - DayMainDetails: Displays main weather details for the day.
 *   - WeatherType: Displays weather icon based on weather conditions.
 *   - ExtraDetails: Displays additional weather details such as pressure, visibility, humidity, and wind.
 * 
 */

import { useSelector } from "react-redux";
import DayMainDetails from "../day-weather/DayMainDetails";
import WeatherType from "../day-weather/WeatherIcon";
import ExtraDetails from "../day-weather/ExtraDetails";

const DayWeather= () => {
    // Selecting forecast data and city details from the Redux store
    const { list: forecastData,city: cityDetails } = useSelector((state) => state.ForecastData.forecastData);

    return (
        <div className="h-[380px] md:h-[280px] flex md:flex-row flex-col flex-[5] items-center justify-center bg-[#444444] rounded-xl shadow-sm drop-shadow-md shadow-black text-white p-2">
            {/* Display main weather details for the day */}
            <DayMainDetails data={forecastData[0]?.main} sunrise={cityDetails.sunrise} sunset={cityDetails.sunset} />
            {/* Display weather icon based on weather conditions */}
            <WeatherType main={forecastData[0]?.main} weather={forecastData[0]?.weather[0]} />
            {/* Display additional weather details */}
            <ExtraDetails pressure={forecastData[0].main.pressure} visibility={forecastData[0].visibility} humidity={forecastData[0].main.humidity} wind={forecastData[0].wind} />
        </div>
    );
}

export default DayWeather;
