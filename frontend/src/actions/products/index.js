import { createGetData } from "../helpers";

export const fetchProducts = createGetData({
    suffix: 'PRODUCTS',
    apiCall: '/api/catalogue',
});