import "./style.scss"
import SingleWeather from "./WeatherList.tsx/SingleWeather";
import WeatherList from "./WeatherList.tsx/WeatherList";
import { Outlet} from "react-router-dom";

export default function App() {

  return (
    <>
    <WeatherList />

    </>
  )
}