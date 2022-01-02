import React, { forwardRef } from "react";
import { AiFillFilePdf } from "react-icons/ai";

const MessageWImage = forwardRef(({ individualMessage }, ref) => {
  return (
    <div
      className={` flex  items-start  space-x-3.5 ${
        individualMessage.user === "John Doe" ? "rt" : ""
      } `}
    >
      <img
        src="/img/dashboard/profile.jpeg"
        className="w-10  rounded-full object-cover h-10"
        alt=""
      />
      <div>
        {individualMessage.message.images.map((image, indx) => {
          return (
            <>
              <div
                ref={ref}
                key={indx}
                className="mb-3 space-y-1 text-gray-600 inline-block cursor-pointer"
              >
                {image.type === "application/pdf" ? (
                  <div className="bg-gray-100 p-1 w-52 h-10 justify-between flex items-center rounded-md border-gray-200 border-[4px]">
                    <div className="  space-x-1 items-center  flex  ">
                      <AiFillFilePdf className="w-6 h-6"></AiFillFilePdf>
                      <a
                        href={image.url}
                        className="cursor-pointer  rounded-md items-center text-sm text-blue-500  flex"
                        download={image.name}
                        target="page"
                      >
                        {image.name}
                      </a>
                    </div>
                    <div className="text-xs">{image.size}</div>
                  </div>
                ) : (
                  <div className="border-2 rounded-md overflow-hidden border-[#FF385C]">
                    <img
                      src={image.url}
                      alt=""
                      className="w-60 max-h-80  object-cover"
                    />
                  </div>
                )}

                <div className="text-xs text-right">
                  {individualMessage.time}
                </div>
              </div>
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
});

export default MessageWImage;
