import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

function products(state = { products: [], message: "" }, action) {
  if (action.type === "GET_DATA") {
    return { ...state, message: "", products: [...action.payload] };
  }
  if (action.type === "UPDATE_PRODUCT") {
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

const updateProduct = (elem) => {
  return { type: "UPDATE_PRODUCT", payload: elem };
};

const getProductsData = (id) => {
  return async (dispatch) => {
    try {
      const subCollectionRef = await collection(db, "users", id, "products");
      const docsSnap = await getDocs(subCollectionRef);
      let docs = docsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch({ type: "GET_DATA", payload: docs });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };
};

const resetProducts = () => {
  return { type: "RESET" };
};

export { getProductsData, resetProducts, products, updateProduct };
