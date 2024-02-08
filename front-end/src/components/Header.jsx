import React from "react";
import LogoutButton from "./LogoutButton";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";

const Header = () => {
  const user = useRecoilValue(userAtom);

  return (
    <div className="flex flex-row-reverse justify-between bg-sky-100 px-8 py-5 gap-3 ">
      <LogoutButton />
      {user ? (
        <div className="text-lg font-normal">Welcome {user.username}</div>
      ) : (
        <h2></h2>
      )}
    </div>
  );
};

export default Header;
