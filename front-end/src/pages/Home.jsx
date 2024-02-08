import React from "react";
import Shortner from "../components/Shortner";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import Analytics from "../components/Analytics";

const Home = () => {
  const user = useRecoilValue(userAtom);
  return (
    <div>
      <Shortner />
      {user ? (<Analytics/>) : null}
    </div>
  );
};

export default Home;
