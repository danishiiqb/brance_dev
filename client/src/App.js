import React, { useEffect, useRef } from "react";
import AdminHome from "./pages/Admin/AdminHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import useAuth from "./hooks/useAuth";
import { useDispatch } from "react-redux";
import { logInUser, logOutUser } from "./store/userAuth";

function App() {
  const [user] = useAuth();
  const dispatch = useDispatch();
  const firstRender = useRef(false);

  useEffect(() => {
    if (user) {
      dispatch(logInUser(user));
      return;
    }
    if (firstRender.current) dispatch(logOutUser());

    return () => {
      firstRender.current = true;
    };
  }, [user, dispatch]);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/admin">
            <AdminHome></AdminHome>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
