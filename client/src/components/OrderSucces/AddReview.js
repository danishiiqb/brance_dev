import React from "react";

function AddReview() {
  return (
    <div className="w-72 inline-block pl-5 pt-5  border-0 border-l-[1.7px] border-[#e0e0e0] text-left   ml-6">
      <form action="" className=" space-y-2">
        <div className="flex space-y-1 text-xs flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="outline-none border-[0.5px]  p-1.5 rounded-sm border-[#a8a8a8] "
            placeholder="Title (optional)"
          />
        </div>
        <div className="flex  space-y-1 text-xs flex-col">
          <label htmlFor="desc">Description</label>
          <textarea
            style={{ resize: "none" }}
            cols={20}
            rows={5}
            className="outline-none border-[0.5px]  p-1.5 rounded-sm border-[#a8a8a8] "
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="text-right">
          <button
            className="text-xs text-white p-1 px-2 rounded-sm font-medium bg-[#ff385dea]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
