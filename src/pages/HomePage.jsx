import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import CityDetails from '../components/city-weather/CityDetails';
import DayWeather from '../components/city-weather/DayWeather';
import { addForecastData } from '../redux/slices/ForecastData';
import Feedback from '../components/Feedback';

export const HomePage = () => {
    const { city } = useSelector((state) => state.City); // Get selected city from Redux store
    const dispatch = useDispatch(); // Redux dispatch function
    console.log(city); // Log the selected city for debugging

    // Fetch forecast data when the selected city changes
    useEffect(() => {
        async function getCityForecast() {
            try {
                // Fetch forecast data from the OpenWeather API
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${city?.coordinates.lat}&lon=${city?.coordinates.lon}&appid=935e5b58051c5a1586837d206997c736`);
                dispatch(addForecastData({ data: response.data })); // Dispatch forecast data to Redux store
                console.log(response.data); // Log the fetched data for debugging
            } catch (error) {
                console.log(error); // Log any error
                // toast.error("Something went wrong, try again"); // Display an error toast if needed
            }
        }
        if (city) {
            getCityForecast(); // Fetch data only if a city is selected
        }
    }, [city]); // Effect dependency on city

    return (
        <div className="px-2 sm:px-[86px]">
            {/* Conditional rendering based on the presence of a selected city */}
            {!city ? (
                <Feedback /> // Show feedback message if no city is selected
            ) : (
                <>
                    <CityDetails /> 
                    <DayWeather /> 
                </>
            )}
        </div>
    );
};

export default HomePage;
