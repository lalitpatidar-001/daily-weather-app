import React, { useState, useEffect } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCity } from '../redux/slices/citySlice';

const Navbar = () => {
    // State variables
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu toggle state
    const [searchedCity, setSearchedCity] = useState(""); // Searched city input state
    const [cities, setCities] = useState([]); // List of cities returned from API
    const dispatch = useDispatch(); // Redux dispatch function

    // Handle input change for the search input field
    const handleInputChange = (e) => {
        setSearchedCity(e.target.value);
        console.log(searchedCity); // Log the searched city
    };

    // Effect to fetch cities based on searchedCity
    useEffect(() => {
        async function getCities() {
            try {
                // Fetch cities from the API based on the searched city name
                const response = await axios.get(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?where=search(name,'${searchedCity}')&order_by=name&limit=100`);
                setCities(response?.data.results); // Set the cities state with the fetched data
            } catch (error) {
                console.log(error); // Log any error
            }
        }
        getCities();
    }, [searchedCity]); // Effect dependency on searchedCity

    // Handle clicking on a city from the dropdown
    const handleClickCity = (city) => {
        dispatch(addCity({ data: city })); // Dispatch the selected city to the Redux store
        setSearchedCity(""); // Clear the search input
    };

    return (
        <div className="flex justify-between items-center gap-6 px-2 mt-2 sm:px-[86px] h-[40px] relative">
            <div className="flex items-center gap-6">
                <span className="text-black font-bold text-[20px]">Logo</span>
                <ul className={`${isMenuOpen ? "sm:static absolute top-[40px] right-0 flex sm:flex-row flex-col gap-2 px-4 py-2 sm:shadow-none shadow-lg" : "hidden"} sm:flex items-center gap-3`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="flex gap-1 items-center border-b-[2px] w-full max-w-[500px] relative">
                <SearchOutlinedIcon style={{ color: "#8E8E92", fontSize: 20 }} />
                <input value={searchedCity} onChange={handleInputChange} placeholder="Search City" className="outline-none placeholder:text-[16px] mb-[2px] w-full" />
                {cities.length > 0 && (
                    <div className="w-full">
                        <div className="flex scroll-container flex-col gap-2 text-black z-[100] absolute top-[40px] left-0 max-h-[40vh] overflow-y-auto bg-[#FFFFFF] shadow-lg">
                            {cities?.map((city, index) => (
                                <span
                                    key={index}
                                    onClick={() => handleClickCity({ name: city?.name, coordinates: city.coordinates })}
                                    className="cursor-pointer hover:bg-gray-300 px-2 py-1"
                                >
                                    {city.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden">
                    <MenuOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
