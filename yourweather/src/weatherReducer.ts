type ACTION =
| {type: "GET_WEATHER", payload: IWeather[]}

export default function weatherReducer(state: IWeather[], action: ACTION) {

    switch(action.type) {
        case "GET_WEATHER":
            return action.payload;
        default:
            throw new Error();
    }
}