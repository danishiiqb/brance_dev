import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { tableHeaderSortingReducer } from "./tableHeaderSortingReducer";
import { modal } from "./modal";
import { userAuthentication } from "./userAuth";
import { products } from "./products";
import thunk from "redux-thunk";
import { filteredDataReducer } from "./filteredData";
import { addToBag } from "./addToBag";
import likedProdReducer from "./likedProductRed";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    tableHeaderSorting: tableHeaderSortingReducer,
    modal,
    user: userAuthentication,
    products: products,
    filteredData: filteredDataReducer,
    addToBag: addToBag,
    likedProducts: likedProdReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
