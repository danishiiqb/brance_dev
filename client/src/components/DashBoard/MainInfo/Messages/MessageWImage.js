import React, { forwardRef } from "react";

const MessageWImage = forwardRef(({ individualMessage }, ref) => {
  return (
    <div
      className={`items-start flex  space-x-3.5 ${
        individualMessage.user === "John Doe" ? "rt" : ""
      } `}
    >
      <img
        src="/img/dashboard/profile.jpeg"
        className="w-11 rounded-full object-cover h-11"
        alt=""
      />
      <div>
        {individualMessage.message.images.map((image, indx) => {
          return (
            <>
              <div
                ref={ref}
                key={indx}
                className="  mb-3  space-y-1 text-gray-600  rounded-md inline-block cursor-pointer"
              >
                <div className="border-2 border-[#FF385C]">
                  <img
                    src={image.url}
                    alt=""
                    className="w-60 rounded-md object-cover"
                  />
                </div>
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
