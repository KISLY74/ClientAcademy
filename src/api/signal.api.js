import api from "./index.js";

export const getSignalConfig = (tgId) => 
    api.get(`/signal/config?tg_id=${tgId}`).then(r => r.data);

export const generateSignal = (tgId, pair, timeframe) =>
    api.get(`/signal/generate`, {
        params: { tg_id: tgId, pair, timeframe }
    }).then(r => r.data);