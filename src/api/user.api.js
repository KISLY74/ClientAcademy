import api from "./index.js";

export const getUserProfile = (tgId) =>
    api.get(`/user/profile`, {
        params: { tg_id: tgId }
    }).then(r => r.data);

export const getUserStatus = (tgId) =>
    api.get(`/user/status`, {
        params: { tg_id: tgId }
    }).then(r => r.data);