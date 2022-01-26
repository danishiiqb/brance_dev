import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

function products(state = { products: [] }, action) {
  if (action.type === "UPDATE_DATA") {
    return { ...state, products: [...action.payload] };
  }
  return state;
}
const getProductsData = (id) => {
  return async (dispatch) => {
    try {
      const subCollectionRef = await collection(db, "users", id, "products");
      const docsSnap = await getDocs(subCollectionRef);
      let docs = docsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch({ type: "UPDATE_DATA", payload: docs });
    } catch (err) {}
  };
};

export { getProductsData, products };
