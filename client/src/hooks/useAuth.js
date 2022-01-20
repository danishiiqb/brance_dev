import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../services/firebase";

function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (userRef) => {
      if (userRef) {
        const reference = doc(db, "users", userRef.uid);
        getDoc(reference).then((snap) => {
          if (snap.exists()) {
            const { type } = snap.data();
            if (type === "admin") {
              setUser({ ...userRef, ...snap.data() });
            }
            return;
          }
          setUser({ ...userRef });
        });
        return;
      }
      setUser(null);
    });
    return unsubscribe;
  }, []);
  return [user];
}
export default useAuth;
