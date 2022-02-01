function filteredDataReducer(state = [], action) {
  if (action.type === "CATEGORY_FILTER") {
    const filteredData = action.payload.elementsArr.filter((product) => {
      return product.category === action.payload.type;
    });
    return [...filteredData];
  }
  return state;
}
const filterCategory = (data) => {
  console.log(data, "hhhgh");
  return { type: "CATEGORY_FILTER", payload: data };
};

export { filterCategory, filteredDataReducer };
