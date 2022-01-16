import React, { useState } from "react";
import Input from "./DashBoard/MainInfo/NewProductAdd/Input";

function Form() {
  const [formData, setformData] = useState({ email: "", password: "" });
  const [err, setErr] = useState({ type: "", mssg: "" });

  const changeFormData = (val, type) => {
    setErr({ type: "", mssg: "" });
    setformData((prev) => {
      return { ...prev, [type]: val };
    });
  };

  function submitHandler(e) {
    e.preventDefault();
    if (!formData.password || !formData.email) {
      setErr({ type: "Not Entered", mssg: "Enter all the fields" });
      return;
    }
  }
  return (
    <form onSubmit={submitHandler}>
      {err.type === "Not Entered" && (
        <div className="text-xs text-[#FF385C] mb-2">{err.mssg}</div>
      )}
      <div>
        <label className="font-medium text-small" htmlFor="email">
          Email Address
        </label>
        <Input
          getAllValues={changeFormData}
          placeholder="Enter Email"
          value={formData.email}
          type="email"
          id="email"
        ></Input>
      </div>
      <div className="mt-3">
        <label className="font-medium text-small" htmlFor="password">
          Password
        </label>
        <Input
          getAllValues={changeFormData}
          placeholder="Enter Password"
          type="password"
          value={formData.password}
          id="password"
        ></Input>
      </div>
      <button
        className="mt-4 bg-[#FF385C] hover:shadow-sm_dark transition-all duration-300 block hover:border-[#ffc1cc] border-[#ff385d00] border-2 w-full font-bold rounded-md text-white text-small  p-2"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default Form;
