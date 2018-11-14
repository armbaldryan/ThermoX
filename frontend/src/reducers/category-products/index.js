import { createGetData } from "../../actions/helpers";
import { createGetReducer } from "../../helpers";

export const fetchProductsBySlug = (slug) => createGetData({
    suffix: 'PRODUCTS_BY_SLUG',
    apiCall: '/api/catalogue',
    apiCallArgs: [ slug ],
})();

export default createGetReducer('PRODUCTS_BY_SLUG');
