import { createGetData } from "../../actions/helpers";
import { createGetReducer } from "../../helpers";

export const fetchSingleProductById = (slug, id) => createGetData({
    suffix: 'PRODUCT_BY_ID',
    apiCall: '/api/catalogue',
    apiCallArgs: [ slug, id ]
})();

export default createGetReducer('PRODUCT_BY_ID');