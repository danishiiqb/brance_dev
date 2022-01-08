import React from "react";
import ImageUploadForm from "../../components/DashBoard/MainInfo/NewProductAdd/ImageUploadForm";
import NewProductForm from "../../components/DashBoard/MainInfo/NewProductAdd/NewProductForm";
import SubmitButtons from "../../components/DashBoard/MainInfo/NewProductAdd/SubmitButtons";
import TextArea from "../../components/DashBoard/MainInfo/NewProductAdd/TextArea";

function AddNewProduct() {
  return (
    <div className="h-panel">
      <div className="bg-white relative  space-x-6 h-full flex shadow-sm_dark rounded-md mt-6 p-small">
        <NewProductForm></NewProductForm>
        <div>
          <ImageUploadForm></ImageUploadForm>
          <TextArea></TextArea>
        </div>
        <SubmitButtons></SubmitButtons>
      </div>
    </div>
  );
}

export default AddNewProduct;
