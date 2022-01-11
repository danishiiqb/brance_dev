import { createStore, combineReducers } from "redux";
import { tableHeaderSortingReducer } from "./tableHeaderSortingReducer";
import { modal } from "./modal";

const store = createStore(
  combineReducers({ tableHeaderSorting: tableHeaderSortingReducer, modal })
);

export default store;
