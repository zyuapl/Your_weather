import React, { createContext, useContext, useEffect, useReducer } from "react";
import weatherReducer from "./weatherReducer";
import api from "./api";
import WeatherList from "./Weather/WeatherList";

const initialState: IWeather[] = [];

const WeatherContext = createContext<{
    weathers: IWeather[];
}>({weathers: []});

export function WeatherContextProvider(): React.ReactElement {

    const [state, dispatch] = useReducer(weatherReducer, initialState);

    async function getWeathers() {
        try {
            const response = await api<IWeather[]>("https://danepubliczne.imgw.pl/api/data/synop");
            dispatch({type: "GET_WEATHER", payload: response.data});
            console.log(response.data);
        } catch(error) {
                console.error(error);
            }
    }

    useEffect(() => {
        getWeathers();
    }, []);

    return (
        <WeatherContext.Provider value={{weathers: state}}>
            <WeatherList />
        </WeatherContext.Provider>
    );
}

export default function useWeatherContext () {
    return useContext(WeatherContext);
}