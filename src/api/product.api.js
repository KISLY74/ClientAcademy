import api from "./index.js";

export const getProducts = (tgId) => 
    api.get(`/products?tg_id=${tgId}`).then(r => r.data);

export const purchase = (tgId, productId) =>
    api.get(`/products/purchase`, {
        params: { tg_id: tgId, product_id: productId }
    }).then(r => r.data);