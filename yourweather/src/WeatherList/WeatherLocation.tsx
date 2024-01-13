import React from "react"
import "../style.scss";
import { Link } from "react-router-dom";

interface IProps {
    weatherByLocation: IWeather;
    isOpen: boolean;
    onClick: () => void;
}

export default function WeatherLocation({weatherByLocation, isOpen, onClick}: IProps): React.ReactElement {
    const {id_stacji, stacja, temperatura, godzina_pomiaru} = weatherByLocation;

    if (!stacja && !temperatura) {
        return <>Brak danych</>
    }

    return (
        
        <tr onClick={onClick}>
            <td><Link to={`${id_stacji}`}>{stacja}</Link></td>
            <td>{temperatura}</td>
            <td>{godzina_pomiaru}:00</td>
        </tr>
        
    );
}