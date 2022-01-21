import React, { useCallback, useState } from "react";
import ImageUploadForm from "../../components/DashBoard/MainInfo/NewProductAdd/ImageUploadForm";
import NewProductForm from "../../components/DashBoard/MainInfo/NewProductAdd/NewProductForm";
import SubmitButtons from "../../components/DashBoard/MainInfo/NewProductAdd/SubmitButtons";
import TextArea from "../../components/DashBoard/MainInfo/NewProductAdd/TextArea";

function AddNewProduct() {
  const [formData, setFormData] = useState({ images: [] });
  const collectValues = useCallback((val, type) => {
    if (type === "IMG_UPLOAD") {
      setFormData((prev) => {
        return {
          ...prev,
          images: [
            ...prev.images,
            new File([val], val.name, { type: val.type })
          ]
        };
      });
      return;
    }
    setFormData((prev) => {
      return { ...prev, [type]: val };
    });
  }, []);
  return (
    <div className="h-panel">
      <div className="bg-white relative  space-x-6 h-full flex shadow-sm_dark rounded-md mt-6 p-small">
        <NewProductForm collectValues={collectValues}></NewProductForm>
        <div>
          <ImageUploadForm collectValues={collectValues}></ImageUploadForm>
          <TextArea collectValues={collectValues}></TextArea>
        </div>
        <SubmitButtons formData={formData}></SubmitButtons>
      </div>
    </div>
  );
}

export default AddNewProduct;
