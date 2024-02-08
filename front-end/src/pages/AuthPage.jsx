import React from "react";
import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import SignupCard from "../components/SignupCard";
import LoginCard from "../components/LoginCard";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  return (
    <div>
      {authScreenState === "login" ? <LoginCard /> : <SignupCard />}
    </div>
  );
};

export default AuthPage;
