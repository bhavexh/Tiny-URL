import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import authAtom from "../atoms/authAtom";
import axios from "axios";

const Header = () => {
  const setUser = useSetRecoilState(userAtom);
  const setauthScreen = useSetRecoilState(authAtom);
  const user = useRecoilValue(userAtom);
  const logoutHandler = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/user/logout");
      const data = res.data;
      if (data.message) {
        localStorage.removeItem("user");
        setUser(null);
        setauthScreen("login");
        alert(data.message);
      }
    } catch (error) {
      alert(error.response.data.error);
      console.error("Error logging out:", error.response.data.error);
    }
  };

  return (
    <div className="flex flex-row-reverse bg-sky-100 px-8 py-5 gap-3 ">
      {user ? (
        <button
          className="text-white bg-primary-600 hover:bg-primary-700 rounded-md py-1 px-3"
          onClick={logoutHandler}
        >
          Logout
        </button>
      ) : (
        <button className="text-white bg-primary-600 hover:bg-primary-700 rounded-md py-1 px-3">
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
