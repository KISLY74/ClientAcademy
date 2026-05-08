import axios from "axios";

const api = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: "https://wanted-grip-mid-transmitted.trycloudflare.com",
});

export default api;