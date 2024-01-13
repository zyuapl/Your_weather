import "./style.scss"
import SingleWeather from "./WeatherList/SingleWeather";
import WeatherList from "./WeatherList/WeatherList";
import { Outlet} from "react-router-dom";

export default function App() {

  return (
    <>
    <WeatherList />

    </>
  )
}