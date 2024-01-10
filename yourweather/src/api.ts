import axios from "axios";

export default axios.create({
    baseURL: "https://danepubliczne.imgw.pl/api/data/synop",
});