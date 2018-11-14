import { combineReducers } from "redux";

import products from "./products";
import categoryProducts from "./category-products";
import product from "./product";

export default combineReducers({
    products,
    product,
    categoryProducts,
});