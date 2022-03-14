import { collection, getDocs, getDoc, doc } from "firebase/firestore";
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

const getProductsData = (id, sub) => {
  return async (dispatch) => {
    try {
      const subCollectionRef = await collection(db, "users", id, sub);
      const docsSnap = await getDocs(subCollectionRef);
      let docs;
      if (sub !== "incomingOrders") {
        const subCollectionRefTwo = await collection(
          db,
          "users",
          id,
          "productsAdminInfo"
        );
        let docSnap2 = await getDocs(subCollectionRefTwo);
        docs = docsSnap.docs.map((doc, idx) => ({
          id: doc.id,
          ...doc.data(),
          adminInfo: { ...docSnap2.docs[idx].data(), id: doc.id }
        }));
      } else {
        let promises = [];
        docsSnap.forEach((docu) => {
          promises.push(getDoc(doc(db, "users", id, "products", docu.id)));
        });
        let fullfiled = await Promise.all(promises);
        docs = docsSnap.docs.map((doc, idx) => {
          return {
            ...doc.data(),
            id: doc.id,
            prize: doc.data().qty * fullfiled[idx].data().prize,
            details: fullfiled[idx].data()
          };
        });
      }
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
