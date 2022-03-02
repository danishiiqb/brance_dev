function addToBag(bag = [], action) {
  if (action.type === "ADD") {
    return [...bag, action.payload];
  }
  if (action.type === "REMOVE") {
    let filtered = bag.filter((prod) => prod.id !== action.payload.id);
    return filtered;
  }
  return bag;
}
function add(payload) {
  return { type: "ADD", payload };
}
function remove(payload) {
  return { type: "REMOVE", payload };
}

export { addToBag, add, remove };
