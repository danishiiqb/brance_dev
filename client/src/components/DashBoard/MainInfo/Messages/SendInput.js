import React, { useEffect, useState } from "react";
import Picker from "emoji-picker-react";
import { BsEmojiSmile, BsEmojiSmileFill } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { IoMdPaperPlane, IoIosPaperPlane } from "react-icons/io";

function SendInput({ messageSubmit }) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [hoverBtn, setHoverBtn] = useState(false);
  const [message, setMessageInp] = useState("");
  const [tooltip, setToolTip] = useState("");
  function getSelectedEmoji(_, emojiObj) {
    setMessageInp((prev) => {
      return prev.concat(emojiObj.emoji);
    });
  }
  return (
    <div className="px-3 mb-3 relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!message) {
            setToolTip("Type a Message");
            return;
          }
          messageSubmit({
            user: "John Doe",
            time: "4:45 PM",
            message
          });
          setMessageInp("");
        }}
      >
        {tooltip && (
          <div className="absolute rounded-sm bg-gray-50 p-2 -top-8 slideup translate-y-7 opacity-0 left-3 shadow-sm_dark text-xs">
            {tooltip}
          </div>
        )}
        <textarea
          rows={1}
          cols={20}
          onChange={(e) => {
            setMessageInp(e.target.value);
            setToolTip("");
          }}
          type="text"
          value={message}
          className="rounded-md   pr-44 transition-all duration-300 border-[.5px] p-2.5 w-full focus:border-[#FF385C] focus:outline-none bg-gray-100 text-sm  border-gray-200"
          placeholder="Type Here"
        />
        <div className="flex  absolute top-[1px] right-[13px] items-center space-x-3">
          <div
            onClick={() => {
              setShowEmoji((prev) => !prev);
            }}
            className="cursor-pointer"
          >
            {showEmoji ? (
              <BsEmojiSmileFill className="w-5 h-5 text-gray-500 animplane opacity-50"></BsEmojiSmileFill>
            ) : (
              <BsEmojiSmile className="w-5 h-5 animplane opacity-50 text-gray-500"></BsEmojiSmile>
            )}
          </div>
          <div className="cursor-pointer">
            <MdAttachFile className="w-5 h-5 text-gray-500"></MdAttachFile>
          </div>
          <button
            onMouseEnter={() => {
              setHoverBtn(true);
            }}
            onMouseLeave={() => {
              setHoverBtn(false);
            }}
            className="text-sm flex items-center space-x-1.5 bg-[#FF385C] rounded-md text-white py-2.5 px-5"
          >
            <div className="font-medium">Send</div>
            {hoverBtn ? (
              <IoIosPaperPlane className="animplane opacity-50 w-5 h-5"></IoIosPaperPlane>
            ) : (
              <IoMdPaperPlane className="animplane opacity-50 w-5 h-5"></IoMdPaperPlane>
            )}
          </button>
        </div>
      </form>
      {showEmoji && (
        <div className="absolute right-0 bottom-full">
          <Picker onEmojiClick={getSelectedEmoji} />
        </div>
      )}
    </div>
  );
}

export default SendInput;
