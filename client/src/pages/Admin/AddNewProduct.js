import React from "react";
import NewProductForm from "../../components/DashBoard/MainInfo/NewProductAdd/NewProductForm";

function AddNewProduct() {
  return (
    <div className="h-panel">
      <div className="bg-white space-x-6 h-full flex shadow-sm_dark rounded-md mt-6 p-small">
        <NewProductForm></NewProductForm>
      </div>
    </div>
  );
}

export default AddNewProduct;
