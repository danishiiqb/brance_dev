import React from "react";
import EditInputField from "./EditInputField";
import EditPhoto from "./EditPhoto";

function EditForm() {
  return (
    <div className="flex py-4 items-start ">
      <div className="flex-1 grid grid-cols-2 mr-8 gap-x-8 gap-y-7">
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
  );
}

export default EditForm;
