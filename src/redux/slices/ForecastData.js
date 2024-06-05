import { createSlice } from "@reduxjs/toolkit";

const initialState: ForecastState = {
    forecastData: {
        list: [{
            main: {
                temp: null,
                feels_like: null,
                temp_min: null,
                temp_max: null,
                pressure: null,
                sea_level: null,
                grnd_level: null,
                humidity: null,
                temp_kf: null,
            },
            weather: [
                {
                    main: "",
                    description: "",
                    icon: "",
                }
            ],
            clouds: {
                all: null
            },
            wind: {
                speed: null,
                deg: null
            },
            visibility: null,
            dt_txt: null,
            pop:null
        }],
        city: {
            name: "string",
            coord: {
                lat: null,
                lon: null
            },
            sunrise: null,
            sunset: null
        }

    }

};

const ForecastSlice = createSlice({
    name: "Forecast",
    initialState,
    reducers: {
        addForecastData: (state, action) => {
            state.forecastData = action.payload.data;
        },

       
    }
});

export const { addForecastData } = ForecastSlice.actions;

export default ForecastSlice.reducer;
