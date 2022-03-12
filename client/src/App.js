import React, { useEffect, useRef } from "react";
import AdminHome from "./pages/Admin/AdminHome";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import Home from "./pages/Home";
import useAuth from "./hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, logOutUser } from "./store/userAuth";
import ResetPassword from "./pages/ResetPassword";
import Shop from "./pages/Shop";
import HeaderSec from "./components/HeaderSec";
import { closeModal } from "./store/modal";
import Modal from "./components/Modal";
import ProductsDisplay from "./pages/ProductsDisplay";
import CartPage from "./pages/CartPage";
import OrderSuccess from "./pages/OrderSuccess";
import OrderCompleted from "./pages/OrderCompleted";

function Wrapper({ children }) {
  const location = useLocation();
  return <div key={location.pathname}>{children}</div>;
}

function App() {
  const [user] = useAuth();
  const dispatch = useDispatch();
  const firstRender = useRef(false);
  const modal = useSelector((state) => {
    return state.modal;
  });

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
        {modal.modal && (
          <>
            <div
              onClick={() => {
                dispatch(closeModal());
              }}
              className="fixed cursor-pointer w-full h-full z-50  bg-[#000000cc]"
            ></div>
            <Modal asAdmin={modal.admin}></Modal>
          </>
        )}
        <HeaderSec></HeaderSec>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path={`/shop/:type/:navType/:id`} exact>
            <Shop></Shop>
          </Route>
          <Route path={`/product/:brand/:name/:id`} exact>
            <Wrapper>
              <ProductsDisplay></ProductsDisplay>
            </Wrapper>
          </Route>
          <Route exact path="/cart">
            <CartPage></CartPage>
          </Route>
          <Route exact path="/MyOrders">
            <OrderSuccess></OrderSuccess>
          </Route>
          <Route exact path="/success">
            <OrderCompleted></OrderCompleted>
          </Route>
          <Route path="/reset-password">
            <ResetPassword></ResetPassword>
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
