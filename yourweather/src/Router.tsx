import { RouterProvider, createBrowserRouter } from "react-router-dom";

import WeatherList from "./WeatherList/WeatherList";
import SingleWeather from "./WeatherList/SingleWeather";

export default function Router() {
    return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <WeatherList />,
        children: [
            {
                path: ":id_stacji",
                element: <SingleWeather />,
            }
        ]
    }
])