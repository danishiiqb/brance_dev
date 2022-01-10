import React from "react";
import ImageUploadBlock from "./ImageUploadBlock";

function ImageUploadForm({ collectValues }) {
  return (
    <div className="">
      <div className="font-medium text-small">Product Image</div>
      <div className="mt-2  h-heightImg flex space-x-3">
        <ImageUploadBlock
          collectValues={collectValues}
          count={0}
        ></ImageUploadBlock>
        <ImageUploadBlock
          collectValues={collectValues}
          count={1}
        ></ImageUploadBlock>
        <div className="flex flex-col space-y-3">
          <ImageUploadBlock
            collectValues={collectValues}
            count={2}
            midSize
          ></ImageUploadBlock>
          <ImageUploadBlock
            collectValues={collectValues}
            count={3}
            midSize
          ></ImageUploadBlock>
        </div>
      </div>
    </div>
  );
}

export default ImageUploadForm;
