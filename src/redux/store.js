import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist"
import cityReducer from "./slices/citySlice"
import forecastDataReducer from "./slices/ForecastData"

const rootReducer = combineReducers({
   City:cityReducer,
   ForecastData:forecastDataReducer
});

const persistConfig = {
    key: "root",
    storage,
    version: 1,
    blacklist: ["City","ForecastData"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddlewate) => getDefaultMiddlewate({
        serializableCheck: false,
        immutableCheck: false
    }),
});

const persistor = persistStore(store);

export { store, persistor }