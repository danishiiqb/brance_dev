import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

function products(state = { products: [], message: "" }, action) {
  if (action.type === "UPDATE_DATA") {
    return { ...state, message: "", products: [...action.payload] };
  }
  if (action.type === "UPDATE_SORT") {
    return { ...state, message: "", products: [...action.payload] };
  }
  if (action.type === "ERROR") {
    return { ...state, products: [], message: action.payload };
  }
  if (action.type === "RESET") {
    return { products: [], message: "" };
  }
  return state;
}

const sortedProduct = (elem) => {
  return { type: "UPDATE_SORT", payload: elem };
};

const getProductsData = (id) => {
  return async (dispatch) => {
    try {
      const subCollectionRef = await collection(db, "users", id, "products");
      const docsSnap = await getDocs(subCollectionRef);
      let docs = docsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch({ type: "UPDATE_DATA", payload: docs });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };
};

const resetProducts = () => {
  return { type: "RESET" };
};

export { getProductsData, resetProducts, products, sortedProduct };
