import React, { useState } from "react";
import Info from "./Info";
import LikeDislike from "./LikeDislike";
import Reply from "./Reply";

function Review({ data, setReply, setEngagement, setAction }) {
  const [replySec, setReplySec] = useState(false);
  const [edit, setEdit] = useState(false);
  function setEditPhase(val) {
    setEdit(val);
    setReplySec(true);
  }
  return (
    <div className="flex items-center">
      <div>
        <div
          className={`flex  relative ${
            data.comments.reply
              ? "after:top-0 after:left-5 after:z-20 after:h-h after:w-[.5px] after:bg-gray-300 after:absolute "
              : ""
          } space-x-2 `}
        >
          <img
            className="w-10 h-10 relative z-30  rounded-full object-cover"
            src={data.comments.img}
            alt=""
          />
          <div>
            <div className="flex items-center space-x-2">
              <div className="font-medium capitalize">{data.comments.name}</div>
              <div className="text-xs">{data.comments.time}</div>
            </div>
            <div className="text-sm inline-block">{data.comments.message}</div>
            <div className="flex space-x-2 items-center">
              <button
                onClick={() => {
                  setReplySec((prev) => {
                    return !prev;
                  });
                }}
                className="text-xs mt-1.5 text-[#4e4e4e]"
              >
                Reply
              </button>
              <LikeDislike
                engageMent={data.comments.engageMent}
                setEngagement={setEngagement}
              ></LikeDislike>
            </div>
            {replySec && (
              <Reply
                closeReply={setReplySec}
                editMode={edit}
                setEdit={setEdit}
                prevValue={data.comments.reply}
                setReply={setReply}
              ></Reply>
            )}
            {data.comments.reply && !edit && (
              <div className="flex items-center justify-between">
                <div className="flex mt-3 relative after:absolute after:top-1/2 after:-left-7 after:w-8 after:h-[.5px]  after:z-20 after:bg-gray-300 space-x-2 ">
                  <img
                    className="w-10 z-30 h-10 rounded-full object-cover"
                    src={data.comments.img}
                    alt=""
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="font-medium capitalize">
                        {data.comments.name}
                      </div>
                      <div className="text-xs">{data.comments.time}</div>
                    </div>
                    <div className="text-sm inline-block">
                      <span className="text-blue-500">
                        @{data.comments.name}{" "}
                      </span>
                      {data.comments.reply}
                    </div>
                  </div>
                </div>
                <Info
                  type="User Reply"
                  setEditPhase={setEditPhase}
                  clickedAction={setAction}
                ></Info>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
