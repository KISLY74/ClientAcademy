import axios from "axios";

const api = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: "https://resume-ground-ocean-indexed.trycloudflare.com",
});

export default api;