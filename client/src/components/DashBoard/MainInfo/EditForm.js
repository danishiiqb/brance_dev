import React from "react";
import EditInputField from "./EditInputField";
import EditPhoto from "./EditPhoto";

function EditForm() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex py-4 items-start ">
        <div className="flex-1 grid grid-cols-2 mr-8 gap-x-8 gap-y-8">
          <EditInputField label="First Name" value="Danish"></EditInputField>
          <EditInputField label="Last Name" value="Iqbal"></EditInputField>
          <EditInputField
            label="Email"
            value="danishiq933@gmail.com"
          ></EditInputField>
          <EditInputField label="Phone" value="+91678996654"></EditInputField>
          <EditInputField
            label="Address"
            value="30 Mcloed Street "
          ></EditInputField>
          <EditInputField label="Location" value="India"></EditInputField>{" "}
          <EditInputField label="Currency" value="US Dollar"></EditInputField>
          <EditInputField label="Password" value="*******"></EditInputField>
        </div>
        <EditPhoto></EditPhoto>
      </div>
      <div className="">
        <button className="bg-[#FF385C] hover:shadow-sm_dark  transition-all duration-300 text-small font-medium text-white p-2 px-3 rounded-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditForm;
