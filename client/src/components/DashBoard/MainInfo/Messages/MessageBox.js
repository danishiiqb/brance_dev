import React, { useEffect, useRef, useState } from "react";
import SendInput from "./SendInput";

function MessageBox() {
  const [messages, setMessage] = useState([
    {
      user: "Jane Albert",
      time: "4:45 PM",
      message: "Hello How You Doin lorem jghghghh"
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
  }, [messages]);

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
        <div className="p-3 flex-1">
          {messages.map((message, idx) => {
            return (
              <div
                ref={lastMessage}
                className={`flex mb-3 ${
                  message.user === "John Doe" ? "rt" : ""
                }  space-x-3.5`}
              >
                <img
                  src="/img/dashboard/profile.jpeg"
                  className="w-11 rounded-full object-cover h-11"
                  alt=""
                />
                <div className="text-sm space-y-1 text-gray-600">
                  <div
                    className={`p-3 rounded-md clip relative before:w-3  ${
                      message.user === "John Doe"
                        ? "before:-right-1"
                        : "before:-left-1"
                    }  before:h-4 before:bg-gray-100 before:rotate-45 before:z-10 z-30  before:absolute before:top-1 hello  max-w-[450px] whitespace-pre-wrap  bg-gray-100`}
                  >
                    {message.message}
                  </div>
                  <div className="text-xs text-right">{message.time}</div>
                </div>
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
