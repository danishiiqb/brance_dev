import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../../components/DashBoard/MainInfo/NavBar";
import SideBar from "../../components/DashBoard/SideBar/SideBar";
import Products from "./Products";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Transactions from "./Transactions";
import Reviews from "./Reviews";
import Customers from "./Customers";

function AdminHome() {
  return (
    <div>
      <SideBar></SideBar>
      <div className="bg-[#f6f6f6] ml-marginLeft py-4 px-6">
        <NavBar></NavBar>
        <Route exact path="/admin/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/admin/products">
          <Products></Products>
        </Route>
        <Route exact path="/admin/orders">
          <Orders></Orders>
        </Route>
        <Route exact path="/admin/transactions">
          <Transactions></Transactions>
        </Route>
        <Route exact path="/admin/reviews">
          <Reviews></Reviews>
        </Route>
        <Route exact path="/admin/customers">
          <Customers></Customers>
        </Route>
      </div>
    </div>
  );
}

export default AdminHome;
