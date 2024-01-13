import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import "../style.scss";
import snow from "../images/snow.png";
import sun from "../images/sun.png";

interface IProps {}

export default function SingleWeather({}: IProps): React.ReactElement | null {
    
    const {id_stacji} = useParams<{id_stacji: string}>();
    const [location, setLocation] = useState<IWeather | undefined>(undefined);

    useEffect(() => {
        api.get<IWeather>(`/id/${id_stacji}`).then((response) => {
        setLocation(response.data);
        console.log(location);
    });
    return (() => {
        setLocation(undefined);
    });
    }, [id_stacji]);

    if (!location) return <div className="single"><h1>Wczytuję...</h1></div>;
    
    return (
        <div className="single"><h1>{location.stacja}</h1>
        {Number(location.temperatura)<=0 && <img src={snow} width={100} />}
        {Number(location.temperatura)>0 && <img src={sun} width={100} />}
        </div>
    )
}