import { createGetData } from "../../actions/helpers";
import { createGetReducer } from "../../helpers";

export const fetchProducts = createGetData({
    suffix: 'PRODUCTS',
    apiCall: '/api/catalogue',
});

export default createGetReducer('PRODUCTS');
