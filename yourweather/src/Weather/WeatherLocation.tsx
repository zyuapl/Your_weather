import React from "react";

interface IProps {
    weatherByLocation: IWeather;
}

export default function WeatherLocation({weatherByLocation}: IProps): React.ReactElement {
    const {stacja, temperatura,godzina_pomiaru} = weatherByLocation;

    if (!stacja && !temperatura) {
        return <>Brak danych</>
    }

    return (
        <div className="loc_table">
            <span className="name">Miasto: {stacja}, temperatura: {temperatura}, godzina pomiaru: {godzina_pomiaru}:00</span>
        </div>
    );
}