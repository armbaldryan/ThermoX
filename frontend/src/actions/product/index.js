import { createGetData } from "../helpers";

export const fetchProductsBySlug = (slug) => createGetData({
    suffix: 'PRODUCTS_BY_SLUG',
    apiCall: '/api/catalogue',
    apiCallArgs: slug
})();