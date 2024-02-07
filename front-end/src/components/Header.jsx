import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row-reverse bg-slate-500 px-8 py-5 gap-3 ">
      <button className="bg-green-300 rounded-md py-1 px-3">Login</button>
      <button className="bg-green-300 rounded-md py-1 px-3">SignUp</button>
    </div>
  );
};

export default Header;
