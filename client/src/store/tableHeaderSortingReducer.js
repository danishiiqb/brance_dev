function tableHeaderSortingReducer(
  state = {
    sortElemName: "",
    order: "",
    modifiedArr: []
  },
  action
) {
  if (action.type === "SORT") {
    const [sortElemName, order] = action.payload;
    return { ...state, sortElemName, order };
  }
  if (action.type === "PRICE") {
    let sortedProducts = [...action.elements].sort((a, b) => {
      return state.order === "asc" ? a.prize - b.prize : b.prize - a.prize;
    });
    return { ...state, modifiedArr: sortedProducts };
  }
  if (action.type === "STOCK") {
    let sortedProducts = [...action.elements].sort((a, b) => {
      return state.order === "asc"
        ? a.inStock - b.inStock
        : b.inStock - a.inStock;
    });
    return { ...state, modifiedArr: sortedProducts };
  }
  if (action.type === "SOLD") {
    let sortedProducts = [...action.elements].sort((a, b) => {
      return state.order === "asc" ? a.sold - b.sold : b.sold - a.sold;
    });
    return { ...state, modifiedArr: sortedProducts };
  }
  if (action.type === "DATE") {
    let sortedProducts = [...action.elements].sort((a, b) => {
      return state.order === "asc"
        ? a.createdAt.seconds - b.createdAt.seconds
        : b.createdAt.seconds - a.createdAt.seconds;
    });
    return { ...state, modifiedArr: sortedProducts };
  }
  if (action.type === "RESET") {
    return { sortElemName: "", order: "", modifiedArr: [] };
  }
  return state;
}

const sortBy = (...element) => {
  return { type: "SORT", payload: element };
};
const sortByType = (elements, type) => {
  return { type, elements };
};

function resettableHeader() {
  return { type: "RESET" };
}
function reset() {}
export {
  tableHeaderSortingReducer,
  resettableHeader,
  reset,
  sortBy,
  sortByType
};
