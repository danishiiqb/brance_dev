function filteredDataReducer(state = [], action) {
  if (action.type === "CATEGORY_FILTER") {
    const filteredData = action.payload.elementsArr.filter((product) => {
      return product.category === action.payload.type;
    });
    return [...filteredData];
  }
  if (action.type === "CATEGORY_DATE") {
    const filteredData = action.payload.elementsArr.filter((product) => {
      let d1 = new Date(product.createdAt.seconds * 1000);
      let d2 = action.payload.start;
      let d3 = action.payload.end;
      return d2.toDateString() !== d3.toDateString()
        ? d1 >= d2 && (d1 <= d3 || d1.toDateString() === d3.toDateString())
        : d1.toDateString() === d2.toDateString();
    });

    return [...filteredData];
  }

  return state;
}
const filterCategory = (data) => {
  return { type: "CATEGORY_FILTER", payload: data };
};
const filterDate = (data) => {
  return { type: "CATEGORY_DATE", payload: data };
};

export { filterCategory, filterDate, filteredDataReducer };
