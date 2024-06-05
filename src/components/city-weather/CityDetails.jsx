

import { useSelector } from "react-redux";
import formatDate from "../../helper/formateDate";



const CityDetails = () => {
    // Selecting city details from the forecast data in the Redux store
    const { city: cityDetails } = useSelector((state) => state.ForecastData.forecastData);

    return (
        <div className="h-[250px]  py-2 lg:py-0 flex-[3] bg-[#444444] z-0 rounded-2xl shadow-sm drop-shadow-md shadow-black text-white flex flex-col items-center gap-5 justify-center">
            {/* Displaying city name */}
            <h1 className="text-3xl font-medium">{cityDetails?.name}</h1>
            {/* Displaying current date */}
            <div className="flex flex-col items-center">
                <span className="text-7xl font-medium font-sans">{}</span>
                <span className="text-4xl font-medium font-sans">{formatDate(Date.now())}</span>
            </div>
        </div>
    );
}

export default CityDetails;
