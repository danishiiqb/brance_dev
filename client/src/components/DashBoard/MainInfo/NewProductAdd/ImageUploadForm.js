import React from "react";
import ImageUploadBlock from "./ImageUploadBlock";

function ImageUploadForm() {
  return (
    <div className="">
      <div className="font-medium text-small">Product Image</div>
      <div className="mt-2  h-heightImg flex space-x-3">
        <ImageUploadBlock></ImageUploadBlock>
        <ImageUploadBlock></ImageUploadBlock>
        <div className="flex flex-col space-y-3">
          <ImageUploadBlock midSize></ImageUploadBlock>
          <ImageUploadBlock midSize></ImageUploadBlock>
        </div>
      </div>
    </div>
  );
}

export default ImageUploadForm;
