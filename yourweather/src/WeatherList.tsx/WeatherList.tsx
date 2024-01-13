import React, { useState } from "react";
import WeatherLocation from "./WeatherLocation";
import api from "../api";
import "../style.scss"
import { showCity } from "../hooks/showCity";
import { Outlet, Link } from "react-router-dom";

export default function WeatherList(): React.ReactElement {
    
    const [state, setState] = useState<IWeather[]>([]);
  async function getWeather() {
    try {
      const response = await api("/");
      setState(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const {activeIndex, setActive} = showCity();

  getWeather();

    return (
        <div className="main">
        <div className="table">
            <section className='table_header'>
                <h2>Wheather in your city now</h2>
            </section>
            <section className="table_body">
                <table>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Time of pomiar</th>
                        </tr>
                    </thead>
                    <tbody>
            {state.map((loc, index) =>(
                <WeatherLocation
                key={loc.id_stacji}
                weatherByLocation={loc}
                isOpen = {index===activeIndex}
                onClick = {() => {
                    setActive(index);
                    console.log(activeIndex);
                }}
                />
            ))}
            </tbody>
                </table>
            </section>
            </div>
            <Outlet />
        </div>
    )
}