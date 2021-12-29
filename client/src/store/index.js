import { createStore, combineReducers } from "redux";
import { tableHeaderSortingReducer } from "./tableHeaderSortingReducer";

const store = createStore(
  combineReducers({ tableHeaderSorting: tableHeaderSortingReducer })
);

export default store;
