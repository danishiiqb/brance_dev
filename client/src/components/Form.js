import React from "react";
import Input from "./DashBoard/MainInfo/NewProductAdd/Input";

function Form() {
  return (
    <form>
      <div>
        <label className="font-medium text-small" htmlFor="email">
          Email Address
        </label>
        <Input placeholder="Enter Email" type="email" id="email"></Input>
      </div>
      <div className="mt-4">
        <label className="font-medium text-small" htmlFor="password">
          Password
        </label>
        <Input
          placeholder="Enter Password"
          type="password"
          id="password"
        ></Input>
      </div>
      <button
        className=" mt-4 bg-[#FF385C] hover:shadow-sm_dark transition-all duration-300 block w-full font-bold rounded-md text-white text-small  p-2"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default Form;
