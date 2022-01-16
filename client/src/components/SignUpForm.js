import React, { useState } from "react";
import Input from "./DashBoard/MainInfo/NewProductAdd/Input";

function SignUpForm() {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    conPassword: ""
  });
  const [err, setErr] = useState({ type: "", mssg: "" });
  function changeFormData(val, type) {
    setErr({ type: "", mssg: "" });
    setFromData((prev) => {
      return { ...prev, [type]: val };
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.password ||
      !formData.email ||
      !formData.conPassword
    ) {
      setErr({ type: "Not Entered", mssg: "Enter all the fields" });
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
      setErr({
        type: "Password Err",
        mssg: "Password must be minimum eight characters, at least one letter and one number"
      });
      return;
    }
    if (formData.password !== formData.conPassword) {
      setErr({ type: "Confirm Password", mssg: "Enter Matching Passwords" });
      return;
    }
  }
  return (
    <form onSubmit={submitHandler}>
      {err.type === "Not Entered" && (
        <div className="text-xs text-[#FF385C] mb-2">{err.mssg}</div>
      )}
      <div>
        <label className="font-medium text-small" htmlFor="name">
          Name
        </label>
        <Input
          value={formData.name}
          getAllValues={changeFormData}
          placeholder="Enter Name"
          id="name"
        ></Input>
      </div>
      <div className="mt-3 block">
        <label className="font-medium text-small" htmlFor="email">
          Email Address
        </label>
        <Input
          getAllValues={changeFormData}
          placeholder="Enter Email"
          type="email"
          value={formData.email}
          id="email"
        ></Input>
      </div>
      <div className="mt-3 block">
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
        {err.type === "Password Err" && (
          <div className="text-xs text-[#FF385C] mt-2">{err.mssg}</div>
        )}
      </div>
      <div className="mt-3 block">
        <label className="font-medium text-small" htmlFor="conPassword">
          Confirm Password
        </label>
        <Input
          getAllValues={changeFormData}
          placeholder="Enter Password"
          type="password"
          id="conPassword"
          value={formData.conPassword}
        ></Input>
        {err.type === "Confirm Password" && (
          <div className="text-xs text-[#FF385C] mt-2">{err.mssg}</div>
        )}
      </div>
      <button
        className="mt-4  bg-[#FF385C] hover:shadow-sm_dark transition-all duration-300 block hover:border-[#ffc1cc] border-[#ff385d00] border-2 w-full font-bold rounded-md text-white text-small  p-2"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
