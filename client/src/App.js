import React from "react";
import AdminHome from "./pages/Admin/AdminHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
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
