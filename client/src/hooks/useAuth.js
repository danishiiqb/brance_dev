import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../services/firebase";

function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        return;
      }
      setUser(null);
    });
    return unsubscribe;
  }, []);
  return [user];
}
export default useAuth;
