/**
 * ExtraDetails Component
 * 
 * This component displays extra weather details including humidity, wind speed, pressure, and visibility.
 * It receives these details as props and displays them alongside relevant icons.
 * 
 * Props:
 *   - humidity: Humidity percentage
 *   - wind: Object containing wind speed and direction
 *   - visibility: Visibility distance
 *   - pressure: Atmospheric pressure
 * 
 * State:
 *   - None
 * 
 * @returns {JSX.Element} ExtraDetails component
 */

import humidity_png from "../../assets/humidity.png";
import barometer_png from "../../assets/barometer.png";
import wind_png from "../../assets/wind.png";
import visibility_png from "../../assets/visible.png";



const ExtraDetails= ({ humidity, wind, visibility, pressure }) => {
    return (
        <div className="flex-[2] flex md:flex-col justify-evenly md:justify-between w-full">
            {/* Humidity and Wind Speed */}
            <div className="flex justify-evenly sm:flex-1 flex-[2]">
                <div className="flex flex-col items-center">
                    {/* Humidity */}
                    <img src={humidity_png} className="h-[50px]" alt="humidity_png" />
                    <span>{humidity}%</span>
                    <span>Humidity</span>
                </div>
                <div className="flex flex-col items-center">
                    {/* Wind Speed */}
                    <img src={wind_png} className="h-[50px]" alt="humidity_png" />
                    {wind.speed && <span>{(wind.speed).toFixed(1)}km/h</span>}
                    <span>Wind Speed</span>
                </div>
            </div>
            {/* Pressure and Visibility */}
            <div className="flex justify-evenly flex-[2]">
                <div className="flex flex-col items-center">
                    {/* Pressure */}
                    <img src={barometer_png} className="h-[50px]" alt="humidity_png" />
                    {pressure && <span>{pressure}hPa</span>}
                    {!pressure && <span>NA</span>}
                    <span>Pressure</span>
                </div>
                <div className="flex  flex-col items-center">
                    {/* Visibility */}
                    <img src={visibility_png} className="h-[50px]" alt="humidity_png" />
                    {visibility && <span>{(visibility / 1000).toFixed(1)}km/h</span>}
                    {!visibility && <span>NA</span>}
                    <span>Visibility</span>
                </div>
            </div>
        </div>
    );
}

export default ExtraDetails;
