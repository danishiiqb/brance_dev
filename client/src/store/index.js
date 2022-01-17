import { createStore, combineReducers } from "redux";
import { tableHeaderSortingReducer } from "./tableHeaderSortingReducer";
import { modal } from "./modal";
import { userAuthentication } from "./userAuth";

const store = createStore(
  combineReducers({
    tableHeaderSorting: tableHeaderSortingReducer,
    modal,
    user: userAuthentication
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
