import { RouterProvider, createBrowserRouter } from "react-router-dom";

import WeatherList from "./WeatherList.tsx/WeatherList";
import SingleWeather from "./WeatherList.tsx/SingleWeather";

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