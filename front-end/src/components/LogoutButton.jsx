import React from "react";
import { useNavigate } from "react-router-dom";
import userAtom from "../atoms/userAtom";
import authAtom from "../atoms/authAtom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";

const LogoutButton = () => {
  const user = useRecoilValue(userAtom);
  const setUser = useSetRecoilState(userAtom);
  const setauthScreen = useSetRecoilState(authAtom);
  const Navigate = useNavigate();

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
    <div>
      {user ? (
        <button
          className="text-white bg-primary-600 hover:bg-primary-700 rounded-md py-1 px-3"
          onClick={logoutHandler}
        >
          Logout
        </button>
      ) : (
        <button
          className="text-white bg-primary-600 hover:bg-primary-700 rounded-md py-1 px-3"
          onClick={() => {
            console.log("Login button clicked");
            setauthScreen("login");
            Navigate("/auth");
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default LogoutButton;
