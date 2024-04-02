import axios from "axios";

export default axios.create({
    baseURL: "https://ghibliapi.vercel.app",
});