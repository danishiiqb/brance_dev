import { doc, collection, getDocs, setDoc } from "firebase/firestore";
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
      const subCollectionRefTwo = await collection(
        db,
        "users",
        id,
        "productsAdminInfo"
      );
      const docsSnap = await getDocs(subCollectionRef);
      let docSnap2 = await getDocs(subCollectionRefTwo);
      let docs = docsSnap.docs.map((doc, idx) => ({
        id: doc.id,
        ...doc.data(),
        adminInfo: { ...docSnap2.docs[idx].data(), id: doc.id }
      }));
      // if (count === 1) {
      //   docsSnap.docs.forEach(async (docu) => {
      //     await setDoc(doc(db, "users", id, "productsAdminInfo", docu.id), {
      //       revenue: 0,
      //       sold: 0
      //     });
      //   });
      // }
      // count++;
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
