import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import MessageWImage from "./MessageWImage";
import SendInput from "./SendInput";

function MessageBox() {
  const [allMessages, setMessage] = useState([
    {
      user: "Jane Albert",
      time: "4:45 PM",
      message: {
        text: "Hello How You Doin lorem jghghghh",
        images: []
      }
    }
  ]);
  const lastMessage = useRef("");
  function getMessage(message) {
    setMessage((prev) => {
      return [...prev, message];
    });
  }
  useEffect(() => {
    if (lastMessage.current !== null) {
      lastMessage.current.scrollIntoView({
        behavior: "smooth",
        inline: "nearest"
      });
    }
  }, [allMessages]);

  return (
    <div className="flex-1 h-full flex flex-col  border-gray-200 rounded-md border-[.5px]">
      <div className="flex items-center p-3 border-gray-200  border-b-[.5px] space-x-2.5 cursor-pointer">
        <div className="relative">
          <img
            src="/img/dashboard/profile.jpeg"
            className="w-11 rounded-full object-cover h-11"
            alt=""
          />
          <div className="w-3 h-3 top-0 left-0 absolute bg-red-400 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <div className="text-sm">Jane Albert</div>
          <div className="text-gray-500 text-xs">Active Now</div>
        </div>
      </div>
      <div className="no-scrollbar flex-1 overflow-scroll">
        <div className="p-3 flex-1 ">
          {allMessages.map((individualMessage, idx) => {
            return (
              <div key={idx}>
                {individualMessage.message.images.length > 0 && (
                  <MessageWImage
                    ref={lastMessage}
                    individualMessage={individualMessage}
                  ></MessageWImage>
                )}
                {individualMessage.message.text && (
                  <Message
                    individualMessage={individualMessage}
                    idx={idx}
                    allMessages={allMessages}
                    ref={lastMessage}
                  ></Message>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <SendInput messageSubmit={getMessage}></SendInput>
    </div>
  );
}

export default MessageBox;
