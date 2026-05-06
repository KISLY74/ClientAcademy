import axios from "axios";

const api = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: "https://studies-carlos-lip-lucky.trycloudflare.com",
});

export default api;