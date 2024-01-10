import React, { useState } from "react";
import useWeatherContext from "../WeatherContext";
import WeatherLocation from "./WeatherLocation";
import api from "../api";

export default function WeatherList(): React.ReactElement {
    
    const [state, setState] = useState<IWeather[]>([]);
  async function getWeather() {
    try {
      const response = await api("yourweather/src/api.ts");
      setState(response.data);
      console.log(state);
    } catch (error) {
      console.error(error);
    }
  }
  getWeather();

    return (
        <div className="table">
            {state.map((loc) =>(
                <WeatherLocation
                key={loc.id_stacji}
                weatherByLocation={loc}
                />
            ))}
        </div>
    )
}

