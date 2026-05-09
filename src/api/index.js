import axios from "axios";

const api = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: "https://occasionally-pas-admitted-stops.trycloudflare.com",
});

export default api;