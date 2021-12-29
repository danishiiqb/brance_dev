const ASCENDING = "ascending";
const DESCENDING = "descending";
const RESET = "reset";
function tableHeaderSortingReducer(
  state = {
    date: "desc",
    price: "desc",
    status: "desc",
    stock: "desc",
    sold: "desc",
    revenue: "desc"
  },
  action
) {
  if (action.type === ASCENDING) {
    return { ...state, [action.payload]: "asc" };
  }
  if (action.type === DESCENDING) {
    return { ...state, [action.payload]: "desc" };
  }
  if (action.type === RESET) {
    let resetState = {};
    Object.entries(state).forEach(([key, value]) => {
      resetState[key] = value === "asc" ? "desc" : value;
    });
    return resetState;
  }
  return state;
}

function activateAscending(key) {
  return { type: ASCENDING, payload: key };
}
function activateDescending(key) {
  return { type: DESCENDING, payload: key };
}
function reset() {
  return { type: RESET };
}
export {
  tableHeaderSortingReducer,
  reset,
  activateAscending,
  activateDescending
};
